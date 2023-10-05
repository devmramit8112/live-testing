import axios from 'axios';
import React, { useRef, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { callApi } from 'src/views/CommonModels/CallApi';

const ImgModalPopupF6 = ({ closeModal, showModal, trn, imgid, isdesable, drw, imageSrc7, imageSrc8, imageSrc9, imageSrc3, handleremarksadd }) => {

    const canvasRef = useRef(null);
    const changeuser = localStorage.getItem('username')
    const token = localStorage.getItem('token')
    const apiPrefix = process.env.REACT_APP_API_PREFIX
    const apigetbalnkimg = `${apiPrefix}/user/form2/get_blankfigure_byid/${imgid}`
    const apigetkimg = `${apiPrefix}/user/form2/get_additional_injury_marked/${trn}/${imgid}`
    const apiupdatemrk = `${apiPrefix}/user/form2/add_additional_injury`
    const [numberList, setNumberList] = useState([]);
    const [context, setContext] = useState(null);
    const [drawing, setDrawing] = useState(false);
    const [brushSize, setBrushSize] = useState(2);
    const [brushColor, setBrushColor] = useState('#000');
    const [eraserMode, setEraserMode] = useState(false);
    const [handleremarks, setremarks] = useState({
        comments: ''
    });
    const [imageSrc, setImageSrc] = useState({
        image: '',
        id: '',
        remarks: ''
    });
    const [errors, setErrors] = useState({
        comments: '',

    });
    const validateformOTP = () => {
        let valid = true;
        const newErrors = {
            comments: '',

        };
        if (handleremarks.comments.trim() === '') {
            newErrors.comments = 'Required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };
    const handlechange = (e) => {
        const { name, value } = e.target
        setremarks({ ...handleremarks, [name]: value })
    }

    useEffect(() => {
        callApi(apigetkimg)
            .then((response) => {
                setImageSrc(response);
                if (imgid === 7) {
                    handleremarks.comments = handleremarksadd.remarks7
                } else if (imgid === 8) {
                    handleremarks.comments = handleremarksadd.remarks8
                } else if (imgid === 9) {
                    handleremarks.comments = handleremarksadd.remarks9
                }
                else {
                    handleremarks.comments = handleremarksadd.remarks3
                }
            }).catch((error) => {
                console.log(error)
            })

    }, [imgid])

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        setContext(ctx);
        // Load the image onto the canvas
        const image = new Image();
        image.src = `data:image/png;base64,${imageSrc.image}`;
        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        };

    }, [imageSrc]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        numberList.forEach(({ x, y, number }) => {
            ctx.font = '20px Arial';
            ctx.fillStyle = 'red';
            ctx.fillText(number, x, y);
        });

        //handleDownloadImage();
    }, [numberList]);

    const startDrawing = (e) => {
        context.beginPath();
        context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setDrawing(true);
    };

    const endDrawing = () => {
        context.closePath();
        setDrawing(false);
    };

    const draw = (e) => {
        if (!drawing) return;
        if (eraserMode) {
            context.strokeStyle = '#fff'; // Set eraser color to match background
            context.lineWidth = brushSize;
        } else {
            context.strokeStyle = brushColor;
            context.lineWidth = brushSize;
        }
        context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        context.stroke();
    };



    const toggleEraser = () => {
        callApi(apigetbalnkimg)
            .then((response) => {
                setImageSrc(response);
                isdesable(true)
            }).catch((error) => {
                console.log(error)
            })
    };

    const enabledraw = () => {
        isdesable(false)
    };

    const handleaddclick = async () => {
        if (validateformOTP()) {
            const canvas = canvasRef.current;
            const canvasDataUrl = canvas.toDataURL('image/png');
            const base64Data = canvasDataUrl.split(',')[1];
            const binaryData = atob(base64Data);
            const byteArray = new Uint8Array(binaryData.length);
            for (let i = 0; i < binaryData.length; i++) {
                byteArray[i] = binaryData.charCodeAt(i);
            }
            const blob = new Blob([byteArray], { type: 'image/png' });
            const formDataWithFile = new FormData()
            formDataWithFile.append('transactionid', trn)
            formDataWithFile.append('createuser', changeuser)
            formDataWithFile.append('fmfigureid', imgid)
            formDataWithFile.append('markedimage_forsavedata', blob)
            formDataWithFile.append('comments', handleremarks.comments)
            const response = await fetch(
                apiupdatemrk,
                {
                    method: 'POST',
                    body: formDataWithFile,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },

            ).then((response) => {
                callApi(apigetkimg)
                    .then((response) => {
                        if (response.id === 7) {
                            imageSrc7(response)
                            handleremarksadd.remarks7 = response.remarks
                        } else if (response.id === 8) {
                            imageSrc8(response)
                            handleremarksadd.remarks8 = response.remarks
                        } else if (response.id === 9) {
                            imageSrc9(response)
                            handleremarksadd.remarks9 = response.remarks
                        }
                        else {
                            imageSrc3(response)
                            handleremarksadd.remarks3 = response.remarks
                        }
                        setImageSrc(response);
                        closeModal()
                    }).catch((error) => {
                        console.log(error)
                    })
            })
                .catch((error) => {
                    toast.error('error occur', {
                        position: toast.POSITION.TOP_RIGHT,
                    })
                })
        }
    }
    return (
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }} >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Additional Injury</h5>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <div className='col-12 col-lg-9'>
                                <canvas
                                    ref={canvasRef}
                                    onMouseDown={startDrawing}
                                    onMouseUp={endDrawing}
                                    onMouseMove={draw}
                                    style={{ cursor: 'crosshair', border: '1px solid #000', pointerEvents: drw ? 'none' : 'auto' }}

                                />
                            </div>
                            <div className='col-12 col-lg-3'>
                                <textarea name="comments" type="text" className={`form-control ${errors.comments ? 'is-invalid' : ''}`} onChange={handlechange} value={handleremarks.comments}></textarea>
                                {errors.comments && <div className="invalid-feedback">{errors.comments}</div>}

                            </div>
                            <div className='col-12 col-lg-3'>
                                <button type="button" className="btn btn-primary m-2" onClick={handleaddclick}>
                                    Add
                                </button>
                                <button className="btn btn-dark m-2" onClick={toggleEraser}> Reset</button>
                                <button className="btn btn-success m-2" onClick={enabledraw}> Draw</button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>
                            Close
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImgModalPopupF6

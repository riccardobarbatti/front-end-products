import axios from 'axios';
import React, {SyntheticEvent, useEffect, useRef, useState} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import Wrapper from "../../components/Wrapper";
import ImageUpload from "../../components/ImageUpload";

const ProductEdit = (props: any) => {
    const [name, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [redirect, setRedirect] = useState(false);
     //use state use for  detect change when upload image form image html
    const ref = useRef<HTMLInputElement>(null);
    const { id } = useParams();

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`products/${id}`);

                setTitle(data.name);
                setDescription(data.description);
                setImage(data.image);
                setPrice(data.price);
            }
        )();
    }, []);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`products/${id}`, {
            name,
            description,
            image,
            price
        });

        setRedirect(true);
    }

    //detect useRef url changed
    const updateImage = (url: string) => {
        if (ref.current) {
            ref.current.value = url;
        }
        setImage(url);
    }

    if (redirect) {
        return <Navigate to="/products"/>;
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label>Title</label>
                    <input className="form-control"
                           defaultValue={name}
                           onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Description</label>
                    <textarea className="form-control"
                              defaultValue={description}
                              onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label>Image</label>
                    <div className="input-group">
                        <input className="form-control"
                               ref={ref}
                               defaultValue={image}
                               onChange={e => setImage(e.target.value)}
                        />
                        <ImageUpload uploaded={updateImage}/>
                    </div>
                </div>
                <div className="mb-3">
                    <label>Price</label>
                    <input type="number" className="form-control"
                           defaultValue={price}
                           onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default ProductEdit;

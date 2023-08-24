import React from 'react';
import {Button, FormControl, TextField} from "@material-ui/core";

const FormPage = () => {
    async function onSubmit(event) {
        event.preventDefault();

        let object = {};
        let formData = new FormData(event.target);

        formData.forEach((value, key) => object[key] = value);

        let response = await fetch('https://mos-ogni.ru', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object),
        });

        console.log(response);
        if (response.status === 200) {
            alert(`${object['name']}, мы получили ваши контакты и свяжемся с вами в ближайшее время!`);
            event.target.reset();
        } else {
            alert(`${object['name']}, произошла ошибка в отправке данных, попробуйте перезагрузить страницу или воспользоваться мессенджером для связи с нами!`);
        }
    }

    return (
        <FormControl
            onSubmit={event => onSubmit(event)}
            component="form"
            sx={{
                maxWidth: '500px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '20vh auto',
                padding: '5vh',
                borderRadius: '8px',
                backgroundColor: 'white',
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="name"
                label="Ваше имя"
                required={true}
                sx={{
                    marginBottom: '2vh',
                }}
            />
            <TextField
                id="input-tel"
                label="Номер телефона"
                required={true}
                sx={{
                    marginBottom: '2vh',
                }}
            />
            <TextField
                id="input-text"
                label="Ваше сообщение"
                sx={{
                    marginBottom: '4vh',
                }}
            />
            <Button type={'submit'}>Отправить</Button>
        </FormControl>
    );
};

export default FormPage;
import React from 'react';
import Button from '../components/Button/Button';
import InputGroup from '../components/InputGroup/InputGroup';
import Layout from '../components/Layout/Layout';
import classes from './form.module.css'


const Form = () => {
    return (
     <Layout>
        <div className={classes.container}>
            <h1>Pleaser Provider your information</h1>
            <InputGroup type = 'text' label = 'What is your name?' placeholder={'Name'} id = 'name'></InputGroup>
            <InputGroup type = 'email' label = 'What is your email?' placeholder={'email'} id = 'email'></InputGroup>
            <InputGroup type = 'password' label = 'What is your password?' placeholder={'password'} id = 'password'></InputGroup>
            <Button type = 'submit' text = 'Submit' variant = 'primary' size = 'large'></Button>
            <Button type = 'reset' text = 'Reset' variant = 'warning' size = 'small'></Button>
            <Button type = 'submit' text = 'Cancel' variant = 'error' size = 'medium'></Button>
        </div>
     </Layout>
    );
};

export default Form;
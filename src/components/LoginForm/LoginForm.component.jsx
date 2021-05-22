import './LoginForm.component.scss'
import { Formik } from 'formik';
import MensajeValidacion from '../MensajeValidacion/MensajeValidacion.component';
import { Link } from 'react-router-dom';	
import {Button,TextField, Grid, Container} from '@material-ui/core';   

export default function LoginForm  ({children, onSubmit, validaciones, action, modeDia}){ 

    let initialValues = { mail: '', pass: '' };
    var isValid = false;
    const login = (values) =>{
        //console.log(values);
        validaciones
            .validate(values)
            .then(function(){
                isValid = true;
            }).catch(function(){
                isValid = false;
            });
    };
    return(<Container style={{ padding: 20 }}>
        {children}
        <Formik validationSchema={validaciones} initialValues={initialValues} onSubmit={onSubmit}>
            {({values, handleChange, handleSubmit, isSubmitting, errors})=>(
                <form onSubmit={handleSubmit} className="formulario" autoComplete="false">
                    <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
                        <Grid container item xs={12} spacing={3} justify="center" style={{ marginBottom: 10 }}>
                            <strong className={modeDia?"modeDia":"modeNoche"}>Acceso</strong>
                        </Grid>
                        <Grid container item xs={12} justify="center"> 
                            <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                                <Grid container item xs={1} justify="center"/> 
                                <Grid container item xs={4} justify="center"> 
                                    <TextField placeholder="Introduce el mail..." type="text" label="Correo Electrónico"
                                            name="mail" className={modeDia?"apply-all-width inputDia":"apply-all-width inputNoche"}
                                            onChange={handleChange}
                                            value={values.mail} />    
                                </Grid>   
                                <Grid container item xs={3} justify="center">                          
                                    <TextField placeholder="Introduce la contraseña..." type="text" label="Contraseña"
                                            name="pass"  className={modeDia?"apply-all-width inputDia":"apply-all-width inputNoche"}
                                            onChange={handleChange} 
                                            value={values.pass} />
                                </Grid>
                                <Grid container item xs={2} justify="center"> 
                                    <Link to={action}  className="apply-all-width">
                                        <Button color="primary" variant="contained" type="submit" onClick={isValid?onSubmit:login(values)} disabled={isSubmitting}>Iniciar sesión</Button>
                                    </Link>
                                </Grid>
                            </Grid>   
                        </Grid>
                        <Grid container item xs={12} spacing={3} justify="center" style={{ padding: 10 }}>  
                            <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1}>
                                <Grid container item xs={2} justify="flex-start"/> 
                                <Grid container item xs={4} justify="flex-start"> 
                                    {errors.mail ? (<MensajeValidacion msg={errors.mail}/>) : null}
                                </Grid>
                                <Grid container item xs={3} justify="flex-start"> 
                                    {errors.pass ? (<MensajeValidacion msg={errors.pass}/>) : null}
                                </Grid>
                                <Grid container item xs={3} justify="flex-start"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    </Container>);
}
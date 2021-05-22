import './Login.page.scss'
import * as Yup from 'yup';
import {useContext} from 'react';
import Context from '../../context';
import RegisterForm from '../../components/RegisterForm/RegisterFrom.component'; 
import LoginForm from '../../components/LoginForm/LoginForm.component'; 
import {Container, Grid, Button} from '@material-ui/core';


export default function Login(props) {
    const context = useContext(Context);

    var mailStr = "";
    
    let registrar = (mail, pass) =>{
      var users = JSON.parse(localStorage.getItem('users'));
      if (users == null) users = [];
      users.push({mail:mail, pass:pass});
      console.log(users);
      localStorage.setItem('users',JSON.stringify(users));
    }

    const setLogOut = () => { context.logOut();}
    const setLogIn  = () => { context.logIn(); }

    let controlLoggin = () => {
      return{
        pathname: '/store'
      }
    }

    let nuevoUsuario = (values, {setSubmitting}) => {
        //e.preventDefault();        
        registrar(values.mail,values.pass);
        setSubmitting(false);
    };

    const validaciones = Yup.object().shape({
        pass: Yup.string()
          .required('Por favor, escribe una contraseña.')
          .min(5, 'Mínimo 5 carácteres.'),
        mail: Yup.string()
          .required("Por favor, incluye el e-mail")
          .email("Introduzca un e-mail válido")
          .test("","Ese e-Mail ya está en uso", value => {
            var users = JSON.parse(localStorage.getItem('users'));
            if (users == null) users = [];  
            var res = []; 
            if(users.length!==0)         
              res = users.filter(user => {
                //console.log(user.mail+" - "+value);
                return user.mail===value;
              });
            return res.length===0;
          })
    });

    const validacionesLogIn = Yup.object().shape({
      pass: Yup.string()
        .required('Por favor, escribe una contraseña.')
        .when(["mail"], {
          is: (mail) =>{
            return mail!=null && mail.length>0;
          },
          then: Yup.string()
          .required('Por favor, escribe una contraseña.')
          .min(5, 'Mínimo 5 carácteres.')
          .test("","Usuario/contraseña incorrectos", value => {
            var users = JSON.parse(localStorage.getItem('users'));
            if (users == null) users = [];  
            var res = []; 
            if(users.length!==0) {       
              res = users.filter(user => {
                //console.log(user.mail+" "+mailStr);
                return user.mail===mailStr;
              });
              if(res[0]===undefined) res=[{pass:"admin"}];
              //console.log("Password",res[0].pass+" "+value)
              if(res[0].pass===value) return true;
            }
            return false;
          })
        }),
      mail: Yup.string()
        .required("Por favor, incluye el e-mail")
        .email("Introduzca un e-mail válido")    
        .test("","", value =>{
          mailStr = value;
          //console.log("MailAssign",mailStr);
          return true;
        })    
  });
    
    return (
      <Context.Consumer>
        {context => (
          <Container  className="material" style={{ padding: 40 }}>
            { context.isLogged ?
            <Button color="secondary" variant="contained" onClick={setLogOut}>
                        Cerrar sesión
            </Button>
            :
            <Grid container direction="column" justify="center" alignItems="center" spacing={10}>
              <Grid container item xs={12} justify="center">
                <LoginForm modeDia={context.isDeDia} onSubmit={setLogIn} validaciones={validacionesLogIn} action={controlLoggin}/>
              </Grid>
              <Grid container item xs={12} justify="center">
                <RegisterForm modeDia={context.isDeDia} onSubmit={nuevoUsuario} validaciones={validaciones}/>
              </Grid>
            </Grid>
            }
          </Container>
        )}
      </Context.Consumer>
    );
}
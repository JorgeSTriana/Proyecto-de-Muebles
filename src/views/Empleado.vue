<template>
    <div>
        <!-- header section star -->
        <app-header></app-header>
        <!-- header section end -->
        <div class="container">
            <div class="subtitle">
                <h2>Empleados</h2>
                <input type="form">
            </div>
            <!--==================== form of register =============-->
            <button onclick="document.getElementById('id02').style.display='block'" class="btn_content" style="width:auto;">Registrar Nuevo Empleado</button>
            <div id="id02" class="modal">
                <div class="content_reg">
                    <form action="/action_page.php" class="modal-content animate">
                        <div class="container_reg">
                            <h1>Registro de Empleado</h1>
                            <p>por favor complete este formulario para crear una cuenta nueva.</p>
                            <hr>
                            <label for="name"><b>Nombre completo</b></label>
                            <input type="text" placeholder="ingrese nombre completo" name="name" id="name" required>
                            <label for="number"><b>Teléfono</b></label>
                            <input type="tel" placeholder="numero de contacto" name="number" id="number" required>
                            <label for="direccion"><b>Dirección</b></label>
                            <input type="text" placeholder="direccion de residencia" name="direccion" id="direccion" required>
                            <label for="Rol"><b>Rol</b></label>
                            <div class="rol-div">
                                <input class="roles" type="radio" id="empastador" name="rol" value="Empastador">
                                <label for="empastador">Empastador</label><br>
                                <input class="roles" type="radio" id="lijador" name="rol" value="Lijador">
                                <label for="lijador">Lijador</label><br>
                                <input class="roles" type="radio" id="pintor" name="rol" value="Pintor">
                                <label for="pintor">Pintor</label>
                                <input class="roles" type="radio" id="engallador" name="rol" value="Engallador">
                                <label for="engallador">Engallador</label>
                                <input class="roles" type="radio" id="ebanista" name="rol" value="Ebanista">
                                <label for="ebanista">Ebanista</label>
                                <input class="roles" type="radio" id="tallador" name="rol" value="Tallador">
                                <label for="tallador">Tallador</label>
                                <input class="roles" type="radio" id="cliente" name="rol" value="Cliente">
                                <label for="cliente">Cliente</label>
                            </div>
                            <label for="email"><b>Email</b></label>
                            <input type="text" placeholder="Ingrese su Email" name="email" id="email" required>
                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Ingrese Password" name="psw" id="psw" required>                            
                            <label for="psw-repeat"><b>Repeat Password</b></label>
                            <input type="password" placeholder="Ingrese nuevamente Password" name="psw-repeat" id="psw-repeat" required>
                            <span class="foto">Adjuntar <a href="#">foto</a></span>
                            <hr>
                            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                            <button type="submit" class="registerbtn">Register</button>                                                                
                            <div class="signin">
                                <!-- <p>Already have an account? <a href="#" onclick="document.getElementById('id02').style.display='none',document.getElementById('id01').style.display='block'">Sign in</a>.</p> -->
                                <button type="button" onclick="document.getElementById('id02').style.display='none',document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                                <!-- <span class="psw">Forgot <a href="#">password?</a></span> -->
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- home section star  -->
        
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default ({
    name: 'Home',
    components: {
        AppHeader
    },
})
</script>
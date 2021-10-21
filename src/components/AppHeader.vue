<template>
    <div>
        <!-- =================Header============= -->
        <!-- <header>
            <a href="/home" class="logo">
                <i class="fas fa-shoe-prints"></i>Swap
                <img src="/img/logo2_preview_rev_1.1.png" alt="" height="150rem">
            </a>
            <div class="fas fa-bars" id="menu-bar"></div>

            <nav class="navbar">
                <a href="/Empleado">Empleados</a>
                <a href="/Nomina">Nómina</a>
                <a href="/Materiales">Materiales</a>
                <a href="/Muebles">Muebles</a>
                <a href="/pedidos">Pedidos</a>
            </nav>
            <div class="img-container">
                <a href="./Perfil"><img class="img-profile" src="/img/perfil.png" alt="profile" width="100" height="100"></a>
            </div>
        </header> -->
        <b-navbar toggleable="lg" type="dark" variant="info">
            <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
            <a href="/home">
            <img class="img-logo" src="/img/logo2_preview_rev_1.1.png" alt="" height="50px">
            </a>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="btns-principales">
                    <b-nav-item class="btn-principales" href="/Empleado">Empleados</b-nav-item>
                    <b-nav-item class="btn-principales" href="/Nomina">Nómina</b-nav-item>
                    <b-nav-item class="btn-principales" href="/Materiales">Materiales</b-nav-item>
                    <b-nav-item class="btn-principales" href="/Muebles">Muebles</b-nav-item>
                    <b-nav-item class="btn-principales" href="/pedidos">Pedidos</b-nav-item>
                    <!-- <b-nav-item class="btn-principales" href="#" disabled>Disabled</b-nav-item> -->
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <!-- <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item class="btns-principales" href="#">EN</b-dropdown-item>
                    <b-dropdown-item class="btns-principales" href="#">ES</b-dropdown-item>
                    <b-dropdown-item class="btns-principales" href="#">RU</b-dropdown-item>
                    <b-dropdown-item class="btns-principales" href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown> -->

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item class="btn-principales" href="#">Sign In</b-dropdown-item>
                        <b-dropdown-item class="btn-principales" href="#">Profile</b-dropdown-item>
                        <b-dropdown-item class="btn-principales" href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                
                </b-navbar-nav>
                <div class="">
                <!-- <b-avatar src="https://placekitten.com/300/300"></b-avatar> -->
                    <!-- <b-avatar src="/img/perfil.png" size="4rem"></b-avatar> -->
                    <b-avatar></b-avatar>
                </div>
            </b-collapse>
        </b-navbar>
    </div>
</template>

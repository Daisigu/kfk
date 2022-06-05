<template>
    <header class="bg-primary ">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <div class="container-fluid">
                    <router-link to="/main" class="navbar-brand text-light">Кредит Финанс</router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/main" class="nav-link" aria-current="page">Главная</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" class="nav-link">Информация</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <router-link to="/sections" class="nav-link dropdown-toggle" href="#"
                                    id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Разделы
                                </router-link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <router-link to="/arhcive" class="dropdown-item">Архив</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/arhcive2" class="dropdown-item">Архив</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/arhcive3" class="dropdown-item">Архив</router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="css">
.nav-link {
    color: white !important;
}
</style>
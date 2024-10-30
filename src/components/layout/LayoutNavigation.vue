<template>
  <div class="navigation-sidebar">
    <ul class="nav flex-column">
      <img class="img-fluid" src="../../assets/nav-logo.png" alt="Logo" />

      <div class="user-info">
        <div class="icon-user">
          <img src="../../assets/SDR4.png" width="45px" alt="User Icon" />
        </div>
        <div class="user-container">
          <div class="affiliate-info">
            <p class="name-user"><b>SDR4</b></p>
            <p class="emissions-user">SDR</p>
          </div>
        </div>

        <div>
          <button class="btn btn-notify" aria-label="Notificações">
            <i class="fa-solid fa-bell fa-1x" />
          </button>
        </div>
      </div>
      <li class="nav-item"><i class="fa-solid fa-fire"></i>Leads</li>
      <li class="nav-item">
        <i class="fa-regular fa-file-lines"></i>Simulador
      </li>
      <li class="exit nav-item">
        <i class="exit fa-solid fa-arrow-right-from-bracket"> </i>Sair
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.navigation-sidebar {
  padding: 0 0.5rem;
  position: fixed;
  overflow: hidden auto;
  width: 245px;
  height: 100% !important;
  box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.1);
  .nav {
    z-index: 100;
    height: 100vh;
    color: var(--dark);
    .img-fluid {
      padding: 41px 27px !important;
    }

    .user-info {
      gap: 16px;
      display: flex;
      width: 100%;
      background-color: var(--green-light);
      padding: 10px 10px;
      border-radius: 9px;
      margin: 0 -15px 5px 5px !important;
      align-items: center;
      justify-items: center;

      .btn-notify {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
        .notification-counter {
          padding-top: 2px;
          width: 20px;
          height: 19px;
          border-radius: 5px;
          margin-top: -20px;
          margin-left: 15px;
          color: #fff;
          font-size: 10px;
        }
      }
    }

    .nav-item {
      color: var(--dark-low);
      transition: 0.2s;
      display: flex;
      align-items: center;
      gap: 0.7rem;
      padding: 1rem !important;
      border-radius: 12px ;

      &.active {
        color: var(--featured) !important;
        background-color: var(--green-light) !important;
      }

      &:hover {
        color: var(--featured);
        background-color: var(--green-light);
      }
    }
    .exit {
      color: var(--red-light) !important;

      &:hover {
        color: var(--featured);
        background-color: var(--red-background);
      }
    }
  }
}
p {
  font-size: 11px;
}

button.btn-notify i {
  color: rgb(47, 180, 144);
}
</style>

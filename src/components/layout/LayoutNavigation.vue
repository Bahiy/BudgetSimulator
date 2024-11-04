<template>
  <div>
    <ul class="nav flex-column">
      <img class="img-fluid" src="../../assets/nav-logo.png" alt="Logo" />

      <div class="user-info col" style="display: flex">
        <div class="icon-user">
          <li class="nav-item">
            <img src="../../assets/SDR4.png" width="45px" alt="User Icon" />
          </li>
        </div>
        <div class="user-container">
          <div class="affiliate-info">
            <p class="name-user">SDR4</p>
            <p class="emissions-user">SDR</p>
          </div>

          <button class="btn btn-notify" aria-label="Notificações">
            <div
              class="notifications-counter"
              style="background-color: rgb(91, 93, 107)"
            >
              0
            </div>
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
.nav {
  display: flex;
  flex-direction: column;
  z-index: 100;
  height: 100%;
  width: 100%;
  padding-left: 0.4rem !important;
  padding-right: 0.4rem !important;
  color: var(--dark);
  gap: 0.5rem;

  .img-fluid {
    width: 100% !important;
    padding: 1.5rem 2.5rem !important;
  }

  .user-info {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    background: var(--green-light);
    border-radius: 9px;
    margin: 0 -1rem 0.3rem 0.2rem !important;

    .user-container {
      display: flex;
      gap: 25px;
    }

    .affiliate-info {
      gap: 0.5rem;

      .name-user,
      .emissions-user {
        letter-spacing: 1px !important;
        font-size: 11px;
        font-weight: 600 !important;
        margin: 3px 0 !important;
        color: var(--dark);
      }
    }

    .btn-notify {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative !important;
      padding: 5px 12px !important;
      background-color: var(--light);
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    }

    .btn-notify .notifications-counter {
      position: absolute !important;
      padding-top: 2px !important;
      width: 20px !important;
      height: 19px !important;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
      border-radius: 5px;
      color: #fff;
      font-size: 10px;
    }
  }

  .user-info .user-container .btn-notify {
    height: 35px !important;
    width: 40px !important;
    padding: 10px 10px !important;
    background-color: #fff;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
  }

  .nav-item {
    font-size: 16px;
    font-weight: 300 !important;
    color: var(--dark-low);
    transition: 0.2s;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.7rem 0 0.7rem 1rem !important;
    border-radius: 7px;

    &.active {
      margin-right: -25px !important;
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

p {
  font-size: 11px;
}

button.btn-notify i {
  color: rgb(47, 180, 144);
}
</style>

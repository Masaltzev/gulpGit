<!DOCTYPE html>
<html lang="ru-RU">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/main.css">
    <title>Hello world</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container"><a class="navbar-brand" href="#">Главная</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active"><a class="nav-link" href="#">Home <span class="sr-only">current</span></a></li>
            <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
            <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown link</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here      </a></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="mt-2 mb-2">
      <div class="container">
        <div class="d-flex bd-highlight border">
          <div class="p-2 flex-fill bd-highlight"> 
            <canvas id="cl" width="400" Height="200">Обновите браузер</canvas>
            <script src="js/main.js"></script>
          </div>
          <div class="p-2 flex-fill bd-highlight border-right border-left">
            <form>
              <div class="form-group">
                <label for="fWidth">Ширина</label>
                <input class="form-control" id="fWidth" type="text" aria-describedby="emailHelp" placeholder="Ширина" value="1300">
              </div>
              <div class="form-group">
                <label for="fHeight">Высота</label>
                <input class="form-control" id="fHeight" type="text" placeholder="Высота" value="1400">
              </div>
              <button class="btn btn-primary" type="submit">Отправить</button>
              <?php $fwidth=($_POST['fwidth']);?>
            </form>
          </div>
          <div class="p-2 flex-fill bd-highlight">
            <h3><span>Тут </span> и вот</h3>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="d-flex p-2 bd-highlight border">
        <div class="container">Подвал</div>
      </div>
    </footer>
    <script src="js/libs.min.js"></script>
    <script src="js/main.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/vue.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
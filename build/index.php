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
      <div class="container"><a class="navbar-brand" href="index.php">Главная</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active"><a class="nav-link" href="first.php">Первая <span class="sr-only">current</span></a></li>
            <li class="nav-item"><a class="nav-link" href="type.php">Типы</a></li>
            <li class="nav-item"><a class="nav-link" href=" cardCreate.php">Карточка</a></li>
            <li class="nav-item"><a class="nav-link" href="typeset.php">Верстаем</a></li>
            <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">php</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"><a class="dropdown-item" href="db.php">Database</a><a class="dropdown-item" href="oop.php">Трепачев</a><a class="dropdown-item" href="trepachevJS.php">Трепачев JS</a><a class="dropdown-item" href="#">Something else here</a></div>
            </li>
            <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Минин</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"><a class="dropdown-item" href="Minin_JS.php">JS</a><a class="dropdown-item" href="crm.php">CRM</a><a class="dropdown-item" href="#">Something else here</a></div>
            </li>
            <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Доки</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"><a class="dropdown-item" href="dogovor.php">Договор</a><a class="dropdown-item" href="football.php">Футбол</a><a class="dropdown-item" href="dragdrop.php">Drag and drop</a></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="mt-2 mb-2">
      <div class="container">
        <div class="d-flex bd-highlight border">
          <div class="p-2 flex-fill bd-highlight">
<!--<script src="../node_modules/jquery/dist/jquery.min.js"></script>-->
          </div>
          <div class="p-2 flex-fill bd-highlight border-right border-left">
            <form>
              <div class="form-group">
                <label for="fWidth">Ширина</label>
                <input class="form-control" id="fWidth" type="text" placeholder="Ширина" name="ww" value="1000">
              </div>
              <div class="form-group">
                <label for="fHeight">Высота</label>
                <input class="form-control" id="fHeight" type="text" placeholder="Высота" name="hh" value="1000">
              </div>
              <button class="btn btn-primary" type="submit" onclick="paint()">Отправить</button>
              <?php $fwidth=($_POST['fWidth']);?>
            </form>
          </div>
          <div class="p-2 flex-fill bd-highlight">
            <!--#app//h3 Hello {{ name }}
            -->
            <!--#date-->
            <form>
              <div class="form-group">
                <label for="selectOpt">Стиль</label>
                <select class="form-control" id="selectOpt">
                  <option value="False" name="one"></option>
                  <option value="Rock" name="one">Рок</option>
                  <option value="Jaz" name="one">Джаз</option>
                  <option value="Blues" name="one">Блюз</option>
                  <option value="Disko" name="one" selected>Диско</option>
                  <option value="Klasic" name="one">Классика</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer class="navbar-fixed-bottom">
      <div class="jumbotron text-center">
        <div class="d-flex p-2 bd-highlight border">
          <div class="container">Подвал</div>
        </div>
      </div>
    </footer>
    <script src="js/libs.min.js"></script>
    <script src="js/main.js"></script>
    <!--script(src="../node_modules/bootstrap/dist/js/bootstrap.js")-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/oop.js"></script>
    <script src="js/vue.js"></script>
    <script src="js/lessons.js"></script>
    <script src="js/snap.svg-min.js"></script>
    <script src="js/example.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
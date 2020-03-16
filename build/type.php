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
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"><a class="dropdown-item" href="Minin_JS.php">JS</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="mt-2 mb-2">
      <div class="container">
        <div class="d-flex bd-highlight border">
          <div class="p-2 flex-fill bd-highlight">
            <form action="" method="post" name="choiсe">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1">
                <label class="form-check-label" for="inlineCheckbox1">1</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" checked>
                <label class="form-check-label" for="inlineCheckbox2">2</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="option3">
                <label class="form-check-label" for="inlineCheckbox3">3</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineCheckbox4" value="option4">
                <label class="form-check-label" for="inlineCheckbox4">4</label>
              </div>
            </form>
          </div>
          <div class="p-2 flex-fill bd-highlight border-right border-left">
            <section id="main">
              <div class="container">
                <div class="calc">
                  <h2>Расчет стоимости</h2>
                  <label for="card_edition">выберите тираж</label>
                  <select class="form-control" id="card_edition" name="edition">
                    <option value="30">30</option>
                    <option value="60">60</option>
                    <option value="90">90</option>
                    <option value="120">120</option>
                    <option value="150">150</option>
                    <option value="180">180</option>
                    <option value="210">210</option>
                  </select>
                  <label for="card_paper">выберите бумагу</label>
                  <select class="form-control" id="card_paper" name="card_paper">
                    <option value="Белая&gt;">Белая</option>
                    <option value="Серая">Серая</option>
                    <option value="Мелованная">Мелованная</option>
                  </select>
                  <label for="card_color">выберите цветность</label>
                  <select class="form-control" id="card_color" name="card_color">
                    <option value="1черная">1черная</option>
                    <option value="2черная">2черная</option>
                    <option value="1цветная">1цветная</option>
                    <option value="2цветная черная">2цветная черная</option>
                    <option value="2цветная">2цветная</option>
                  </select>
                </div>
              </div>
            </section>
          </div>
          <div class="p-2 flex-fill bd-highlight"></div>
        </div>
      </div>
    </section>
    <footer>
      <div class="jumbotron text-center" style="margin-bottom:0">
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
    <script src="js/first.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
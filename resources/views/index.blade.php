<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typing Test</title>
    <link href="{{ asset('css/style.css')}}" rel="stylesheet" type="text/css" />
    <!-- Import JS files -->
    <script defer type="text/javascript" src="{{asset('js/script.js') }}"></script>
    <script type="text/javascript" src="{{asset('js/paragraphs.js') }}"></script>
    <!-- Import FontAwesome icons -->
    <script src="https://kit.fontawesome.com/2c9f15701e.js" crossorigin="anonymous"></script>
</head>
    <body>
        <div class="app">
            <div class="container">
                @include('includes.header')
                @include('includes.test')
                @include('includes.footer')
            </div>
        </div>
    </body>
</html>

<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">
    <meta name="Description" content="Website description">
    <link rel="shortcut icon" href="{{{ asset('logo.png') }}}">
    <title>Template</title>
</head>

<style>

</style>

<body>
    <div id="index">
        <script src="{{mix('js/app.js')}}"></script>
    </div>
</body>



</html>
<!DOCTYPE html>


<html>

<head>

<meta charset=utf-8 />

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Demo</title>

<script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-app.js"></script>

<script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-messaging.js"></script>

<script src="http://dipush.devapp.hq2.rep/T/OFC4/WPS/21331/11856/COAi5y099rmucIqlIsUzRiDpiK0y2skW/DI.WebPush-min.js"></script>

</head>


<body>

<label>Adresse courriel du contact</label>
<button ID ="btnIsSubscribed" OnClick="TestIsSubscribed" Text="Tester isSubscribed"/>
<label ID ="lblIsSubscribed" />
</body>

</html>

<script>

function TestIsSubscribed()
{
	if (DI.isSubscribed)
		lblIsSubscribed.Text = "Le user isSubscribed"
	else
		lblIsSubscribed.Text = "Le user n'est pas isSubscribed"	
}
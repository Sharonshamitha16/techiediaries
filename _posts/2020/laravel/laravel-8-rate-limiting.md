---
layout: bpost
title: ""
image: "images/content/laravel.png"
excerpt: "" 
tags : [laravel, laravel-6-tutorials-and-examples, laravel6] 
---

Laravel 8 officially released on 8th September 2020. The laravel team releases new Laravel version in every 6-month interval with major changes. As Laravel 8 Non-LTS (general version), the Laravel 8 will provide 6 months bug fixes until March 8, 2021, and 1-year security fixes until 8 September 2021.

In laravel 8, now you can rate limit in a new way, easily and more conveniently. Here is an example

Define Rate Limit

```php
RateLimiter::for('upload', function (Request $request) {
	Limit::perMinute(10)->by($request->ip()),
});

RateLimiter::for('download', function (Request $request) {
	if ($request->user()->isSubscribed()) {
    	return Limit::none();
	}
	Limit::perMinute(10)->by($request->ip()),
});
```

Use rate limiter as regular middleware

```php
Route::get('/upload','UploadController@index')->->middleware('throttle:upload');
Route::get('/download','DownloadController@index')->->middleware('throttle:download');

// or use it no group
Route::middleware(['throttle:upload'])->group(function () {
	
});
```
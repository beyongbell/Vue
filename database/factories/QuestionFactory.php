<?php

use Faker\Generator as Faker;
use App\Models\Question;
use App\Models\Category;
use App\Models\User;

$factory->define(Question::class, function (Faker $faker) {
    $title = $faker->sentence;
    return [
        'category_id' => function() {
            return Category::all()->random();
        },
        'user_id' => function() {
            return User::all()->random();
        },
        'title' => $title,
        'slug'  => str_slug($title),
        'body'  => $faker->text
    ];
});

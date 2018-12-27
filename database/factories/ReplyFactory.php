<?php

use Faker\Generator as Faker;
use App\Models\Reply;
use App\Models\Category;
use App\Models\User;
use App\Models\Question;

$factory->define(Reply::class, function (Faker $faker) {
    return [
        'question_id' => function() {
            return Question::all()->random();
        },
        'user_id' => function() {
            return User::all()->random();
        },
        'body'  => $faker->text
    ];
});

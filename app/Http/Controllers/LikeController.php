<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Reply;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function __construct()
    {
        $this->middleware('JWT'); // and only between
    }

    public function likeIt(Reply $reply)
    {
        $reply->likes()->create(['user_id' => auth()->id()]);
    }

    public function unLikeIt(Reply $reply)
    {
        $reply->likes()->where('user_id', auth()->id())->first()->delete();
    }
}

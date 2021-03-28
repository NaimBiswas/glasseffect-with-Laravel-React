<?php

namespace App\Http\Controllers;

use App\Models\LoginController;
use Error;
use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;
use Laravel\Ui\Presets\React;

class LoginControllerController extends Controller
{
    public function PostData(Request $request)
    {
        LoginController::create([
            'name' => $request->name,
            "email" => $request->email,
            "password" => $request->password,
        ]);
    }
    public function TestFun(Request $request)
    {
        // dd($request);

        // $request->validate([
        //     'name' => 'unique',
        //     'email' => 'email|unique',

        // ]);
        LoginController::create([
            'name' => $request->name,
            "email" => $request->email,
            "password" => $request->password,
        ]);
        return redirect('/');
        // if ($errors->any()) {
        //     return response()->json("There is an error Please check again");
        // } else {
        //     return response()->json("Log In Success");
        // }
    }
}

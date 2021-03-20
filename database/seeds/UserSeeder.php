<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        User::truncate();

        $users = [
            [
                'name' => 'admin',
                'email' => 'admin@mailinator.com',
                'password' =>  Hash::make('admin'),
                'status' => '1'
            ],
            [
                'name' => 'user',
                'email' => 'user@mailinator.com',
                'password' =>  Hash::make('user123'),
                'status' => '1'
            ],
        ];

        foreach ($users as $user) {
            User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'password' => $user['password'],
            ]);
        }
    }
}

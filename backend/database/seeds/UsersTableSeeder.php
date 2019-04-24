<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'first_name' => 'Administrator',
            'last_name' => 'Mi apellido',
            'identification' => rand(1000000,900000),
            'address' => 'cra 22 - 12',
            'cellphone' => 3178288921,
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password')
        ])->assignRole('admin');

        $teacher = User::create([
            'first_name' => 'teacher',
            'last_name' => 'Mi apellido',
            'identification' => rand(1000000,900000),
            'address' => 'cra 22 - 12',
            'cellphone' => 3178288923,
            'email' => 'teacher@gmail.com',
            'password' => Hash::make('password')
        ])->assignRole('teacher');

        $student = User::create([
            'first_name' => 'Student',
            'last_name' => 'Mi apellido',
            'identification' => rand(1000000,900000),
            'address' => 'cra 22 - 12',
            'cellphone' => 3178288924,
            'email' => 'student@gmail.com',
            'password' => Hash::make('password')
        ])->assignRole('student');

    }
}

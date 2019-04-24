<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        $this->call(RolesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(CareersTableSeeder::class);
        $this->call(MattersTableSeeder::class);
        $this->call(CutsTableSeeder::class);
        $this->call(TypeTaskTableSeeder::class);
    }
}

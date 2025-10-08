# DrivingSchool - Run locally
1. Update `appsettings.json` connection string.
2. From project folder:
 ````bash
 dotnet ef migrations add InitialCreate
 dotnet ef database update
 dotnet run
 ````
3. Visit https://localhost:5001
Default seeded admin: admin@drivingschool.local / Admin123!
# DRIVING-SCHOOL

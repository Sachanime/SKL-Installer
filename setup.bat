::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGyX8VAjFChVTwyDAE+1BaAR7ebv/Na3sEIaRuMydY7P07uAHNM4xgjNe4U513ZWndkwOxJWeh28fTAEqG1Jt2OACOqdvQ7mT1q26kQ3FCt9hGyw
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSDk=
::cBs/ulQjdF+5
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+JeA==
::cxY6rQJ7JhzQF1fEqQJQ
::ZQ05rAF9IBncCkqN+0xwdVs0
::ZQ05rAF9IAHYFVzEqQJQ
::eg0/rx1wNQPfEVWB+kM9LVsJDGQ=
::fBEirQZwNQPfEVWB+kM9LVsJDGQ=
::cRolqwZ3JBvQF1fEqQJQ
::dhA7uBVwLU+EWDk=
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATElA==
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnk
::Zh4grVQjdCyDJGyX8VAjFChVTwyDAE+1BaAR7ebv/Na3sEIaRuMydY7P07uAHNM4xgjNe4U513ZWndkwPzB0QTulfRs1pWJHpCqAL8L8
::YB416Ek+ZW8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
chcp 65001 >nul

echo  ____  _  ___       ____                                          
echo / ___^|^| ^|/ / ^|     ^|  _ \ _ __ ___   __ _ _ __ __ _ _ __ ___  ___ 
echo \___ \^| ' /^| ^|     ^| ^|_) ^| '__/ _ \ / _` ^| '__/ _` ^| '_ ` _ \/ __^|
echo  ___) ^| . \^| ^|___  ^|  __/^| ^| ^| (_) ^| (_^| ^| ^| ^| (_^| ^| ^| ^| ^| ^| \__ \
echo ^|____/^|_^|\_\_____^| ^|_^|   ^|_^|  \___/ \__, ^|_^|  \__,_^|_^| ^|_^| ^|_^|___/
echo                                     ^|___/                         
timeout 3 >nul
cls

echo Welcome to
timeout 1 >nul
echo.
echo  ____  _  ___       ___           _        _ _           
echo / ___^|^| ^|/ / ^|     ^|_ _^|_ __  ___^| ^|_ __ _^| ^| ^| ___ _ __ 
echo \___ \^| ' /^| ^|      ^| ^|^| '_ \/ __^| __/ _` ^| ^| ^|/ _ \ '__^|
echo  ___) ^| . \^| ^|___   ^| ^|^| ^| ^| \__ \ ^|^| (_^| ^| ^| ^|  __/ ^|   
echo ^|____/^|_^|\_\_____^| ^|___^|_^| ^|_^|___/\__\__,_^|_^|_^|\___^|_^|   
echo.
timeout 1 >nul

echo Select the program you want to install
echo.
echo 1 - Auto-Winget
echo 2 - Registry-Reparator
echo 0 - Exit
echo.
set /p choice="Your choice : "
echo.
if "%choice%"=="1" GOTO autoWinget
if "%choice%"=="2" GOTO registryReparator
if "%choice%"=="0" GOTO EXIT

:autoWinget

    echo Starting Auto-Winget installation...
    timeout 1 >nul
    echo.

    set CHECK_1=0
    set CHECK_2=0

    echo Checking Windows version...
    set REQUIRED_BUILD=26100
    for /f "tokens=3" %%a in ('reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v CurrentBuild ^| find "CurrentBuild"') do set BUILD=%%a
    echo Your Windows version : 10.0.%BUILD%
    timeout 1 >nul
    echo.
    
    if %BUILD% GEQ %REQUIRED_BUILD% (
        echo You system is ready
        timeout 1 >nul
        echo.
    ) else (
        echo You system isn't compatible
        timeout 1 >nul
        GOTO EXIT
    )


    echo Activating Sudo...
    sudo config --enable normal
    timeout 1 >nul
    echo.

    echo Creating directories...
    mkdir "C:\Program Files\SKL\Auto-Winget"
    timeout 1 >nul
    echo.

    echo Downloading files...
    timeout 3 >nul
    curl -L -o "C:\Program Files\SKL\Auto-Winget\Auto-Winget.ps1" https://raw.githubusercontent.com/Sachanime/Auto-winget/main/Auto-Winget.ps1 && set CHECK_1=1
    curl -L -o "C:\Program Files\SKL\Auto-Winget\Auto-winget.xml" https://raw.githubusercontent.com/Sachanime/Auto-winget/main/Auto-Winget.xml
    timeout 1 >nul
    echo.

    echo Importing scheduled task...
    powershell -Command "Register-ScheduledTask -Xml (Get-Content 'C:\Program Files\SKL\Auto-Winget\Auto-winget.xml' -Raw) -TaskName 'Auto-Winget'" && set CHECK_2=1
    timeout 1 >nul
    echo.

    if %CHECK_1%==1 ( 

        if %CHECK_2%==1 ( echo Operation successful ) else ( echo Operation failed )

    ) else ( echo Operation failed )

GOTO EXIT

:registryReparator

    echo Starting Auto-Winget installation...
    timeout 1 >nul
    echo.

    set CHECK_1=0
    set CHECK_2=0

    echo Creating directories...
    mkdir "C:\Program Files\SKL\Registry-Reparator"
    timeout 1 >nul
    echo.

    echo Downloading files...
    timeout 3 >nul
    curl -L -o "C:\Program Files\SKL\Registry-Reparator\Registry_Reparator.exe" https://raw.githubusercontent.com/Sachanime/Registry-Reparator/main/Registry_Reparator.exe && set CHECK_1=1
    curl -L -o "C:\Program Files\SKL\Registry-Reparator\UserDiag.exe" https://userdiag.com/download && set CHECK_2=1
    timeout 1 >nul
    echo.

    if %CHECK_1%==1 ( 

        if %CHECK_2%==1 ( echo Operation successful ) else ( echo Operation failed )

    ) else ( echo Operation failed )

GOTO EXIT

:EXIT

    echo.
    echo Thanks for using SKL Programs!
    timeout 5 >nul
    exit

:RESTART_EXIT

    echo.
    echo Your system will restart in less than a minute to complete installation
    echo Thanks for using SKL Programs!
    shutdown /r
    timeout 5 >nul
    exit
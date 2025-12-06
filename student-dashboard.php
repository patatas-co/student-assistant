<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="icon" href="favicon/favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon/favicon-16x16.png" sizes="16x16" type="image/png">
    <link rel="icon" href="favicon/favicon-32x32.png" sizes="32x32" type="image/png">
    <link rel="apple-touch-icon" href="favicon/apple-touch-icon.png" sizes="180x180">
    <link rel="icon" href="favicon/android-chrome-192x192.png" sizes="192x192" type="image/png">
    <link rel="icon" href="favicon/android-chrome-512x512.png" sizes="512x512" type="image/png">
    <link rel="manifest" href="favicon/site.webmanifest">
    <title>Student Dashboard | Professor Evaluation</title>
    <link rel="stylesheet" href="student-dashboard.css" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <!-- Sidebar -->
    <aside class="sidebar">
        <button class="sidebar-toggle" aria-label="Toggle sidebar">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </button>
        
        <div class="logo">
            <img src="favicon/android-chrome-192x192.png" alt="Professor Evaluation" />
            <span>Professor <br>Evaluation</br> </span>
        </div>
        
        <nav class="nav-menu">
            <a href="#" class="nav-link tooltip-enabled active" data-module="profile" data-tooltip="Profile" aria-label="Profile">
                <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Profile</span>
            </a>
            <a href="#" class="nav-link tooltip-enabled" data-module="evaluate" data-tooltip="Evaluate" aria-label="Evaluate">
                <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 3h6a2 2 0 0 1 2 2v2"></path>
                    <path d="M9 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7"></path>
                    <path d="M9 7h6"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
                <span>Evaluate</span>
            </a>
            <a href="#" class="nav-link tooltip-enabled" data-module="settings" data-tooltip="Settings" aria-label="Settings">
                <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.28 0 .55.04.81.09H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                <span>Settings</span>
            </a>
        </nav>
        
        <div class="logout">
            <a href="login.php" class="logout-btn tooltip-enabled" data-tooltip="Logout" aria-label="Logout">
                <svg class="logout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span>Logout</span>
            </a>
        </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
        <header class="dashboard-header">
            <h1 id="module-title">User Profile</h1>
            <p class="welcome">Welcome back, <strong>John Doe</strong></p>
        </header>

        <section id="module-content">
            <div class="loading">Loading module...</div>
        </section>
    </main>

    <!-- Load external JS at the end -->
    <script src="student-dashboard.js"></script>
</body>
</html>
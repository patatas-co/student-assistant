<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Student Assistant Login</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body class="login-body">
    <header class="login-header">
        <div class="page-wrapper login-header__inner">
            <a class="brand" href="index.html">
                <img src="favicon/favicon-32x32.png" alt="Student Assistant Hub" />
                Student Assistant Hub
            </a>
        </div>
    </header>

    <main class="login-main">
        <section class="page-wrapper login-wrapper">
            <div class="login-hero">
                <h1>Student Assistant Login</h1>
                <p class="muted-text">Access your dashboard to manage applications, timesheets, and support services securely.</p>
                <ul class="login-highlights">
                    <li>Track application status and requirements</li>
                    <li>Submit weekly timesheets for approval</li>
                    <li>Connect with support offices in one portal</li>
                </ul>
            </div>
            <div class="login-card">
                <form class="login-form" action="#" method="post">
                    <label for="email">Institutional Email</label>
                    <input id="email" name="email" type="email" placeholder="name@student.edu" required />

                    <label for="password">Password</label>
                    <input id="password" name="password" type="password" placeholder="Enter your password" required />

                    <button type="submit" class="primary-btn">Log In</button>
                    <a class="form-link" href="#">Forgot your password?</a>
                    <a class="form-link" href="registration.html">Don't have an account? Register</a>
                </form>
            </div>
        </section>
    </main>

    <footer>
        <div class="page-wrapper">
            <p>&copy; <span id="year"></span> Development of Web-based System for Student Assistant Application and Streamlined Student Support Services. All rights reserved.</p>
            <div class="footer-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#cookies">Cookie Policy</a>
            </div>
        </div>
    </footer>

    <script src="app.js"></script>
</body>
</html>

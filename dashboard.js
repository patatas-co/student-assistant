// dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const links = document.querySelectorAll('.nav-link');
    const content = document.getElementById('module-content');
    const title = document.getElementById('module-title');

    // Toggle sidebar collapse/expand
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    const modules = {
        profile: `
            <div class="module-card">
                <h3>Edit Your Profile</h3>
                <form>
                    <div class="form-group"><label>Full Name</label><input type="text" value="John Doe" /></div>
                    <div class="form-group"><label>Course</label><input type="text" value="BS Computer Science" /></div>
                    <div class="form-group"><label>Contact</label><input type="text" value="john@student.edu" /></div>
                    <div class="form-group"><label>Supervisor</label><input type="text" value="Dr. Maria Santos" disabled /></div>
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                </form>
            </div>`,

        application: `
            <div class="module-card">
                <h3>Assistantship Application</h3>
                <div class="status-badge status-approved">Approved</div>
                <p><strong>Submitted:</strong> October 15, 2025</p>
                <p><strong>Position:</strong> IT Support Assistant</p>
                <p><strong>Department:</strong> Office of Student Services</p>
                <button class="btn btn-primary" style="margin-top:16px;">View Details</button>
            </div>`,

        tasks: `
            <div>
                <h3>Assigned Tasks</h3>
                <div class="module-card">
                    <p><strong>Task:</strong> Update Student Portal UI</p>
                    <p><strong>Due:</strong> November 10, 2025</p>
                    <div class="status-badge status-in_progress">In Progress</div>
                </div>
                <h3 style="margin-top:24px;">Performance Feedback</h3>
                <div class="module-card">
                    <p><em>"Great attention to detail and proactive communication."</em></p>
                    <p><strong>Score:</strong> 92/100</p>
                </div>
            </div>`,

        communication: `
            <div>
                <h3>Messages</h3>
                <div class="module-card" style="height:300px;overflow-y:auto;padding:16px;">
                    <p><strong>You:</strong> I've completed the report. <small>10:30 AM</small></p>
                    <p><strong>Dr. Santos:</strong> Excellent work! Approved. <small>11:15 AM</small></p>
                    <p><strong>You:</strong> Thank you! <small>11:16 AM</small></p>
                </div>
                <form style="margin-top:16px;">
                    <div class="form-group"><textarea placeholder="Type your message..." rows="3"></textarea></div>
                    <button type="submit" class="btn btn-primary">Send</button>
                </form>

                <h3 style="margin-top:32px;">Notifications</h3>
                <div class="module-card">
                    <p>New task assigned: "Prepare Q4 Report"</p>
                    <small>2 hours ago</small>
                </div>
            </div>`,

        sentiment: `
            <div>
                <h3>AI Sentiment Analysis</h3>
                <div class="module-card">
                    <p><strong>Feedback:</strong> "Great attention to detail and proactive communication."</p>
                    <p><strong>Sentiment:</strong> <span style="color:#155724;font-weight:600;">POSITIVE (94%)</span></p>
                </div>
                <div class="module-card">
                    <p><strong>Feedback:</strong> "Needs to improve time management."</p>
                    <p><strong>Sentiment:</strong> <span style="color:#721c24;font-weight:600;">NEGATIVE (88%)</span></p>
                </div>
            </div>`,

        reports: `
            <div>
                <h3>Performance Overview</h3>
                <div class="chart-container"><canvas id="performanceChart"></canvas></div>
                <h3 style="margin-top:32px;">Feedback Sentiment Trend</h3>
                <div class="chart-container"><canvas id="sentimentChart"></canvas></div>
            </div>`
    };

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const module = link.dataset.module;

            // Update active state
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Update title
            title.textContent = link.querySelector('span').textContent;

            // Update content
            content.innerHTML = modules[module] || '<p>Module coming soon...</p>';

            // Initialize charts when needed
            if (module === 'reports') setTimeout(initCharts, 100);
        });
    });

    // Load default module
    document.querySelector('[data-module="profile"]').click();

    // ---------- Chart initialization ----------
    function initCharts() {
        // Performance bar chart
        const perfCtx = document.getElementById('performanceChart').getContext('2d');
        new Chart(perfCtx, {
            type: 'bar',
            data: {
                labels: ['Week 1','Week 2','Week 3','Week 4'],
                datasets: [{
                    label: 'Performance Score',
                    data: [85,88,92,90],
                    backgroundColor: 'rgba(76,175,80,0.6)',
                    borderColor: '#4caf50',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: { y: { beginAtZero:true, max:100 } }
            }
        });

        // Sentiment doughnut chart
        const sentCtx = document.getElementById('sentimentChart').getContext('2d');
        new Chart(sentCtx, {
            type: 'doughnut',
            data: {
                labels: ['Positive','Neutral','Negative'],
                datasets: [{
                    data: [75,20,5],
                    backgroundColor: ['#4caf50','#ffeb3b','#f44336'],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { position:'bottom' } }
            }
        });
    }
});
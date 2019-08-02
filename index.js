let Greenlock = require("greenlock-express");
let express = require("express")
let app = express()
Greenlock.create({
        email: "dawood.aijaz97@gmail.com", // The email address of the ACME user / hosting provider
        agreeTos: true, // You must accept the ToS as the host which handles the certs
        configDir: "~/.config/acme/", // Writable directory where certs will be saved
        communityMember: true, // Join the community to get notified of important updates
        telemetry: true, // Contribute telemetry data to the project
        approvedDomains: ["instance2mymachines.xyz", "www.instance2mymachines.xyz"],
        // Using your express app:
        // simply export it as-is, then include it here
        app: app,
        server: "https://acme-v02.api.letsencrypt.org/directory",
        //, debug: true
    })
    .listen(80, 443);
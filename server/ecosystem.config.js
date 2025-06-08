module.exports = {
    apps : [
        {
            name: "shedly",
            script: "npm",
            args:"run dev",
            env: {
                NODE_ENV: "development"
            }
        }
    ]
}
## Pages to build

### 🏠 Homepage/ dashboard

```js
router.get("/",(req, res){
  res.render("dashboard")
})

```

- current jobs
- upcomming jobs
- add new job/ customer easy
- click on any job to see more info

### 👷‍♀️ Job Pages

```js
// 1.  add new job
router.post("/jobs/:job_id",(req, res){
  res.render("dashboard")
})


// 2.  see 1 job
router.get("/jobs/:job_id",(req, res){
  res.render("1 Job")
})


// 3.  see all jobs
router.get("/jobs/",(req, res){
  res.render("All Jobs")
})

```

### 🧑‍🦲 Customer pages

```js
// 1.  add new Customer
router.post("/customers/:customer_id",(req, res){
  res.render("customers")
})

// 2.  see 1 job
router.get("/customers/:customer_id",(req, res){
  res.render("1 customer")
})


// 3.  see all jobs
router.get("/customers/",(req, res){
  res.render("All customers")
})

```

## Database

Job

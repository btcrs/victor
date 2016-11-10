# victor
    Monitoring and controlling my garden from the web

Victor is a collection of services that are accessed transparently through this
Angular powered dashboard.

This site interacts with a separate API to facilitate authentication
and gather the latest data points.

Victor is still very much in development.

# why

Gardening is hard, and hydroponic gardens are even harder. This site is meant
to make maintaining a hydroponic garden easier by taking measurements for you and
remembering how values have changed over time.

If successful, Victor could be key in making soilless gardens accessible.

# installation

As it stands right now the site can be run locally by running these commands:

```
bower install
npm install
gulp serve
```

I'm currently in the process of researching CI/CD options. Ideally the site will
run encapsulated in a Docker container, which will be built and pushed to a
public registry. At this time it seems that Heroku could be a very viable option.



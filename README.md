# OSCAL.io

This is the source code for [OSCAL.io](https://oscal.io). The site is built using
[Jekyll](https://jekyllrb.com/).

## Building the site

Building the site requires having Jekyll available. Follow the
[Jekyll installation steps](https://jekyllrb.com/docs/installation/) for your operating system
and configuration. Once you have done so, launch the site locally by running

```bash
bundle exec jekyll serve
```

This will build a local development version of the site. For additional options available for
serving a local development version or building a production site, refer to the
[Jekyll documentation](https://jekyllrb.com/docs/usage/).

## Contributing

Contributions to OSCAL.io are welcome! If you are proposing a new feature or other large changes,
please [open an issue](https://github.com/EasyDynamics/oscal.io/issues/new) to discuss prior to
beginning work to ensure that it aligns with the goals of the project. For items that directly
align with project goals, feel free to open an issue or jump straight to submitting a pull request.
Items that always align with the goals of OSCAL.io include:
 - adding information about community events
 - adding information about available open source tools
 - fixing bugs (including accessibility issues and typos)

### Adding event information

To add information about an event, you may open an issue using the "Add an event" form and wait
for a team member to add the necessary page to the repository; or you may submit a PR which will
expedite the process.

> **Note**: We are actively working on reducing the friction for the process of contributing
> event information. We look forward to providing more information on this soon.

#### Details to add an event

Event information is stored in the `_events/` directory. To add a new a event, create a file in
that folder using a `.html` or `.md` file extension. Start your file with the following content
(or copy the template file `event-frontmatter.txt`):

```md
---
---
```

This begins the "front matter" of the document; in here we will store metadata about the event.
Items are added in a format like `key: value` between the sets of triple dashes (`---`).

The first field to add is the title; between the sets of dashes add a like that begins with
`title: `. After that, add the title of your event.

On a new line, add a line that begins with `start-date: ` and then format the start date of the
event using ISO 8601 format including the event time zone. For example,
`2023-04-17T22:07:43-04:00`. Then add a line that begins with `end-date: ` and do the same for
end date/time of the event. Remember that Eastern Time in the US is `-04:00` during the
summer (EDT) and `-05:00` during the winter (EST).

Next, add a line that begins with `location: ` and add a human-readable location for where the
event takes place. This should include the name of the building/business and the city where the
event is being held. If virtual, include the name of the app used to host the meeting, such as
`Virtual (Microsoft Teams)`. Then add a link that begins with `map-link: `. This should be the
meeting URL for a virtual event or a Google Maps short link to the venue for the event.

For the final front matter item,, you may optionally add three new lines formatted like the
following to provide a link to event details on an external site:

```yaml
link:
  name:
  url:
```

After `name: `, provide a friendly name for the site/page being linked to and after `url: `, give
the URL to the page.

Finally, after the second line of `---` (after the front matter), add the details of your event.
This can be done using HTML if you used the `.html` file extension or using Markdown if you used
the `.md` file extension (you are free to rename your file if required).

Once done, you may open a pull request which the team will review for publishing. 

## License

The site content is available under the terms of the [CC-BY-SA 4.0 License](./LICENSE).

---
layout: base
---
{::options parse_block_html="true"/}

<header>
<h1 id="name">{{site.title}}</h1>
<p id="summary">{{site.description}}</p>
</header>

{%-assign experience_by_order = site.data.work-%}
{%-for hash in experience_by_order-%}
{%-if hash[1].hide != true-%}
{%-include experience.liquid hash=hash type='work'-%}
{%-endif-%}
{%-endfor-%}

{%-assign experience_by_order = site.data.education-%}
{%-for hash in experience_by_order-%}
{%-if hash[1].hide != true-%}
{%-include experience.liquid hash=hash type='education'-%}
{%-endif-%}
{%-endfor-%}

{%-comment-%}
# vim: syntax=liquid
{%-endcomment-%}

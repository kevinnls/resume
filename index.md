---
layout: base
---
{::options parse_block_html="true"/}

<header>
<h1 id="name">{{site.title}}</h1>
<p id="summary">{{site.description}}</p>
</header>

{%-assign experience_by_order = site.data.work_experience-%}
{%-for hash in experience_by_order-%}
{%-if hash[1].hide != true-%}
{%-include work_experience.liquid hash=hash-%}
{%-endif-%}
{%-endfor-%}


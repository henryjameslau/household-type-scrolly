<script>
    import {
    Header,
    Hero,
    Highlight,
    Section,
    Grid,
    Divider,
    Blockquote,
    Em,
    Scroller,
    ScrollerSection,
    Footer,
  } from "@onsvisual/svelte-components";

  import {LineChart} from "@onsvisual/svelte-charts";

  export let data;
  let linechartdata = data.places

  const scrollerColors = ["#fff", "#ffe", "#fef"];

  const filterfuncs = [
    ["Couple: Dependent children","Lone parent: Dependent children",'Couple: No dependent children','Multi-person household: Other','One-person household','Lone parent household: No dependent children','Multi-person household: All students'],
    ["Couple: Dependent children"],
    ["Couple: Dependent children","Lone parent: Dependent children"],
    ["Couple: Dependent children","Lone parent: Dependent children",'Couple: No dependent children'],
    ["Couple: Dependent children","Lone parent: Dependent children",'Couple: No dependent children','Lone parent household: No dependent children'],
    ["Couple: Dependent children","Lone parent: Dependent children",'Couple: No dependent children','Multi-person household: Other','One-person household'],
    ["Couple: Dependent children","Lone parent: Dependent children",'Couple: No dependent children','Multi-person household: Other','One-person household','Multi-person household: All students'],
    ["Couple: Dependent children","Lone parent: Dependent children",'Couple: No dependent children','Multi-person household: Other','One-person household','Lone parent household: No dependent children','Multi-person household: Other'],
]

  let scrollerColor = scrollerColors[0];

</script>

<Header compact />

<Hero
  title="England and Wales population by household type"
  lede="Understanding census data about different household types by age"
  date="2023-10-13"
>
  <!-- <Checkbox label="Enable animation" variant="ghost" checked={animation} noBorder/> -->
</Hero>

<!-- <Highlight marginBottom="{false}">
  <p>This is a test paragraph.</p>
  <p>This is another test paragraph.</p>
</Highlight> -->

<Section title="Introduction title" marginTop="{true}">
  <p>
    Inspired by this tweet
  </p>
  <blockquote class="twitter-tweet"><p lang="en" dir="ltr">UK Population by Single Year of Age &amp; Housing Tenure <a href="https://t.co/RcX4ZFremk">pic.twitter.com/RcX4ZFremk</a></p>&mdash; Neal Hudson (@resi_analyst) <a href="https://twitter.com/resi_analyst/status/1111582314377760768?ref_src=twsrc%5Etfw">March 29, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
  <!-- <Blockquote attribution="A. Person">
    This is a blockquote, white comprises of a large block of inset text.
  </Blockquote> -->
  <p>
    we are going to examine 2021 Census data from England and Wales step by step in a scrollytelling format. 
  </p>
</Section>

<!-- <Grid colwidth="medium" caption="This is a caption text">
  <div class="grid-cell"></div>
  <div class="grid-cell"></div>
  <div class="grid-cell"></div>
</Grid>

<Divider />

<Section title="Another section title">
  
</Section> -->

<Scroller
  id="scroller"
  splitscreen
  on:change="{(e) => {
    scrollerColor = scrollerColors[e.detail.index];
    console.log('scroller index',e.detail.index)
    linechartdata = data.places.map(d=>{if(filterfuncs[e.detail.index].includes(d.hhtype)){return d}else{return {age:d.age,obs:0,hhtype:d.hhtype}}})
  }
  }"
>
  <div slot="background">
    <Grid width="full" height="full">
      <div class="placeholder-block">
        <LineChart height='75vh' data={linechartdata} xKey="age" yKey='obs' zKey='hhtype' line={false} area={true} mode='stacked' padding="{{top:250, left:100,right:50, bottom: 30}}" legend/>
        <!-- <LineChart data={linechartdata} xKey="year" yKey='value' zKey='group' line={false} area={true} mode='stacked' padding="{{left:100,right:50}}"/> -->
      </div>
    </Grid>
  </div>
  <div slot="foreground">
    <ScrollerSection>
      <p>
        This is the population of England and Wales broken down into 8 main groups. We're going to examine them one by one.
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        The biggest section are people who live in a <Em color="{'#206095'}">couple with dependent children</Em> household. We see a peak on the left for the children and the adults who look after them on the right.
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        <Em color="#A8BD3A">Lone parent with dependent children</Em> are the next segment. They often have older children and are less common then couples. 
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        As children grow up <Em color="#003C57">couples with no dependent children</Em> are no longer living with their child and these are seen in the older age groups.
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        <Em color="#F66068">Lone parent households with no dependent children</Em> are mostly focused around the early 20s and also 50s. 
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        <Em color="#118C7B">One-person household</Em> increase in the 20s and then peaks in the 50s.
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        Lastly <Em color="#22D0B6">All students households</Em> are found around the student ages. 
      </p>
    </ScrollerSection>
  </div>
</Scroller>

<Section title="Outro">
  <p>
    And so concludes our tour of household type by age for England and Wales.
  </p>
  <p>
    Hope you liked it and hope to you soon.
  </p>
  <p>
    I should write some more interesting stuff
  </p>
  <p>
    But I don't know what else to say
  </p>
  <p>
    And this is just meant to be a demo
  </p>
</Section>

<Footer compact />
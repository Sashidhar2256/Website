
(function(){
  const stages=[
    ['01','Architecture','Define product function, block diagram, interfaces, performance, power and area targets.'],
    ['02','Microarchitecture','Choose pipeline, FSMs, datapaths, memories, buses, clock/reset strategy.'],
    ['03','RTL Design','Write synthesizable Verilog/SystemVerilog that represents hardware intent.'],
    ['04','Verification','Run simulation, assertions, coverage and waveform debug before synthesis.'],
    ['05','Synthesis','Convert RTL into gate-level netlist using SDC constraints and libraries.'],
    ['06','Floorplan','Define die/core, macros, ports, rows, channels, blockages and power intent.'],
    ['07','Power Plan','Create rings, straps, rails, taps, decaps and power-domain structure.'],
    ['08','Placement','Place standard cells and optimize timing, congestion, area and power.'],
    ['09','CTS','Build clock tree, control skew/latency/transition and prepare clock timing.'],
    ['10','Routing','Connect nets with legal metal/vias and optimize post-route timing/SI.'],
    ['11','Signoff','Close STA, DRC, LVS, IR/EM, SI, antenna, density and ECO checks.'],
    ['12','Tapeout','Release clean GDS, reports, waivers, checklist and foundry handoff package.']
  ];
  function stageList(){return stages.map(s=>`<div class="asic-stage-item"><strong>${s[0]}</strong><div><span>${s[1]}</span><small>${s[2]}</small></div></div>`).join('')}
  function diagram(){return `<svg class="asic-flow-diagram" viewBox="0 0 920 620" role="img" aria-label="ASIC flow structure and architecture diagram"><defs><linearGradient id="asicGold" x1="0" x2="1"><stop stop-color="#ffe37a"/><stop offset="1" stop-color="#d99a16"/></linearGradient><marker id="flowArrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#ffd966"/></marker></defs><text x="38" y="42" class="gold">ASIC Flow Architecture</text><rect class="hot" x="50" y="78" width="210" height="72" rx="18"/><text x="84" y="121">Spec / Architecture</text><path class="wire" d="M260 114 H345" marker-end="url(#flowArrow)"/><rect class="box" x="350" y="78" width="210" height="72" rx="18"/><text x="405" y="121">RTL + DV</text><path class="wire" d="M560 114 H645" marker-end="url(#flowArrow)"/><rect class="box" x="650" y="78" width="210" height="72" rx="18"/><text x="703" y="121">Synthesis</text><path class="wire" d="M755 150 V215" marker-end="url(#flowArrow)"/><rect class="box" x="650" y="220" width="210" height="72" rx="18"/><text x="711" y="263">Floorplan</text><path class="wire" d="M650 256 H565" marker-end="url(#flowArrow)"/><rect class="box" x="350" y="220" width="210" height="72" rx="18"/><text x="399" y="263">Power Plan</text><path class="wire" d="M350 256 H265" marker-end="url(#flowArrow)"/><rect class="box" x="50" y="220" width="210" height="72" rx="18"/><text x="106" y="263">Placement</text><path class="wire" d="M155 292 V357" marker-end="url(#flowArrow)"/><rect class="box" x="50" y="362" width="210" height="72" rx="18"/><text x="126" y="405">CTS</text><path class="wire" d="M260 398 H345" marker-end="url(#flowArrow)"/><rect class="box" x="350" y="362" width="210" height="72" rx="18"/><text x="416" y="405">Routing</text><path class="wire" d="M560 398 H645" marker-end="url(#flowArrow)"/><rect class="box" x="650" y="362" width="210" height="72" rx="18"/><text x="712" y="405">Signoff</text><path class="wire" d="M755 434 V500" marker-end="url(#flowArrow)"/><rect class="hot" x="650" y="505" width="210" height="72" rx="18"/><text x="711" y="548">Tapeout</text><rect class="box" x="50" y="500" width="500" height="78" rx="18"/><text x="80" y="532" class="gold">Feedback loops</text><text x="80" y="558" class="small">Timing, DRC, LVS, IR/EM, SI and ECO issues can send the design back to placement, CTS, routing, or constraints.</text></svg>`}
  function inject(){
    const section=document.querySelector('.asic-flow-session');
    if(!section || document.querySelector('.asic-architecture-panel')) return;
    const panel=document.createElement('section');
    panel.className='asic-architecture-panel';
    panel.innerHTML=`<h2>ASIC Flow Structure and Architecture</h2><p>This section explains how an ASIC moves from idea to tapeout. Architecture defines what the chip must do; the implementation flow converts that intent into verified silicon layout.</p><div class="asic-architecture-grid"><article class="asic-architecture-card"><h3>Stage-by-stage structure</h3><div class="asic-stage-list">${stageList()}</div></article><article class="asic-architecture-card"><h3>Flow architecture diagram</h3>${diagram()}</article></div><div class="asic-architecture-note"><div><strong>Inputs</strong><span>Spec, RTL, constraints, libraries, LEF/DEF, UPF, test intent and signoff rules.</span></div><div><strong>Outputs</strong><span>Netlist, placed/routed DEF, extracted SPEF, clean reports, final GDS and waiver package.</span></div><div><strong>Ownership</strong><span>Frontend, verification, synthesis, physical design, STA, PV and signoff teams must keep handoff clean.</span></div></div>`;
    const head=section.querySelector('.asic-flow-choice-head');
    if(head) head.insertAdjacentElement('afterend', panel); else section.prepend(panel);
  }
  window.addEventListener('load',inject);
  new MutationObserver(()=>setTimeout(inject,80)).observe(document.documentElement,{childList:true,subtree:true});
})();

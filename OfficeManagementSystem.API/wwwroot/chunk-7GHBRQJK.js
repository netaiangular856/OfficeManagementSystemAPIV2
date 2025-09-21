import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  InjectionToken,
  NgModule,
  NgZone,
  Observable,
  PLATFORM_ID,
  ReplaySubject,
  RuntimeError,
  Subject,
  Subscription,
  asapScheduler,
  assertInInjectionContext,
  asyncScheduler,
  getOutputDestroyRef,
  inject,
  input,
  isPlatformBrowser,
  output,
  setClassMetadata,
  signal,
  switchMap,
  takeUntil,
  throttleTime,
  viewChild,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵqueryAdvance,
  ɵɵviewQuerySignal
} from "./chunk-T743GANX.js";
import {
  __async
} from "./chunk-EVSPGG2W.js";

// node_modules/ng-apexcharts/fesm2022/ng-apexcharts.mjs
var _c0 = ["chart"];
var _ChartComponent = class _ChartComponent {
  constructor() {
    this.chart = input();
    this.annotations = input();
    this.colors = input();
    this.dataLabels = input();
    this.series = input();
    this.stroke = input();
    this.labels = input();
    this.legend = input();
    this.markers = input();
    this.noData = input();
    this.parsing = input();
    this.fill = input();
    this.tooltip = input();
    this.plotOptions = input();
    this.responsive = input();
    this.xaxis = input();
    this.yaxis = input();
    this.forecastDataPoints = input();
    this.grid = input();
    this.states = input();
    this.title = input();
    this.subtitle = input();
    this.theme = input();
    this.autoUpdateSeries = input(true);
    this.chartReady = output();
    this.chartInstance = signal(null);
    this.chartElement = viewChild.required("chart");
    this.ngZone = inject(NgZone);
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  }
  ngOnChanges(changes) {
    if (!this.isBrowser) return;
    this.ngZone.runOutsideAngular(() => {
      asapScheduler.schedule(() => this.hydrate(changes));
    });
  }
  ngOnDestroy() {
    this.destroy();
  }
  hydrate(changes) {
    const shouldUpdateSeries = this.autoUpdateSeries() && Object.keys(changes).filter((c) => c !== "series").length === 0;
    if (shouldUpdateSeries) {
      this.updateSeries(this.series(), true);
      return;
    }
    this.createElement();
  }
  createElement() {
    return __async(this, null, function* () {
      const {
        default: ApexCharts
      } = yield import("./chunk-36XB6ATF.js");
      window.ApexCharts ||= ApexCharts;
      const options = {};
      const properties = ["annotations", "chart", "colors", "dataLabels", "series", "stroke", "labels", "legend", "fill", "tooltip", "plotOptions", "responsive", "markers", "noData", "parsing", "xaxis", "yaxis", "forecastDataPoints", "grid", "states", "title", "subtitle", "theme"];
      properties.forEach((property) => {
        const value = this[property]();
        if (value) {
          options[property] = value;
        }
      });
      this.destroy();
      const chartInstance = this.ngZone.runOutsideAngular(() => new ApexCharts(this.chartElement().nativeElement, options));
      this.chartInstance.set(chartInstance);
      this.render();
      this.chartReady.emit({
        chartObj: chartInstance
      });
    });
  }
  render() {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.render());
  }
  updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.updateOptions(options, redrawPaths, animate, updateSyncedCharts));
  }
  updateSeries(newSeries, animate) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.updateSeries(newSeries, animate));
  }
  appendSeries(newSeries, animate) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.appendSeries(newSeries, animate));
  }
  appendData(newData) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.appendData(newData));
  }
  highlightSeries(seriesName) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.highlightSeries(seriesName));
  }
  toggleSeries(seriesName) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.toggleSeries(seriesName));
  }
  showSeries(seriesName) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.showSeries(seriesName));
  }
  hideSeries(seriesName) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.hideSeries(seriesName));
  }
  resetSeries() {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.resetSeries());
  }
  zoomX(min, max) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.zoomX(min, max));
  }
  toggleDataPointSelection(seriesIndex, dataPointIndex) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.toggleDataPointSelection(seriesIndex, dataPointIndex));
  }
  destroy() {
    this.chartInstance()?.destroy();
    this.chartInstance.set(null);
  }
  setLocale(localeName) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.setLocale(localeName));
  }
  paper() {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.paper());
  }
  addXaxisAnnotation(options, pushToMemory, context) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.addXaxisAnnotation(options, pushToMemory, context));
  }
  addYaxisAnnotation(options, pushToMemory, context) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.addYaxisAnnotation(options, pushToMemory, context));
  }
  addPointAnnotation(options, pushToMemory, context) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.addPointAnnotation(options, pushToMemory, context));
  }
  removeAnnotation(id, options) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.removeAnnotation(id, options));
  }
  clearAnnotations(options) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.clearAnnotations(options));
  }
  dataURI(options) {
    return this.chartInstance()?.dataURI(options);
  }
};
_ChartComponent.\u0275fac = function ChartComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChartComponent)();
};
_ChartComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ChartComponent,
  selectors: [["apx-chart"]],
  viewQuery: function ChartComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.chartElement, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  },
  inputs: {
    chart: [1, "chart"],
    annotations: [1, "annotations"],
    colors: [1, "colors"],
    dataLabels: [1, "dataLabels"],
    series: [1, "series"],
    stroke: [1, "stroke"],
    labels: [1, "labels"],
    legend: [1, "legend"],
    markers: [1, "markers"],
    noData: [1, "noData"],
    parsing: [1, "parsing"],
    fill: [1, "fill"],
    tooltip: [1, "tooltip"],
    plotOptions: [1, "plotOptions"],
    responsive: [1, "responsive"],
    xaxis: [1, "xaxis"],
    yaxis: [1, "yaxis"],
    forecastDataPoints: [1, "forecastDataPoints"],
    grid: [1, "grid"],
    states: [1, "states"],
    title: [1, "title"],
    subtitle: [1, "subtitle"],
    theme: [1, "theme"],
    autoUpdateSeries: [1, "autoUpdateSeries"]
  },
  outputs: {
    chartReady: "chartReady"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 2,
  vars: 0,
  consts: [["chart", ""]],
  template: function ChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElement(0, "div", null, 0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var ChartComponent = _ChartComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartComponent, [{
    type: Component,
    args: [{
      selector: "apx-chart",
      template: `<div #chart></div>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], null, null);
})();
var declarations = [ChartComponent];
var _NgApexchartsModule = class _NgApexchartsModule {
};
_NgApexchartsModule.\u0275fac = function NgApexchartsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgApexchartsModule)();
};
_NgApexchartsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NgApexchartsModule,
  imports: [ChartComponent],
  exports: [ChartComponent]
});
_NgApexchartsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var NgApexchartsModule = _NgApexchartsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgApexchartsModule, [{
    type: NgModule,
    args: [{
      imports: [declarations],
      exports: [declarations]
    }]
  }], null, null);
})();

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
var OutputFromObservableRef = class {
  source;
  destroyed = false;
  destroyRef = inject(DestroyRef);
  constructor(source) {
    this.source = source;
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
    });
  }
  subscribe(callbackFn) {
    if (this.destroyed) {
      throw new RuntimeError(953, ngDevMode && "Unexpected subscription to destroyed `OutputRef`. The owning directive/component is destroyed.");
    }
    const subscription = this.source.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (value) => callbackFn(value)
    });
    return {
      unsubscribe: () => subscription.unsubscribe()
    };
  }
};
function outputFromObservable(observable, opts) {
  ngDevMode && assertInInjectionContext(outputFromObservable);
  return new OutputFromObservableRef(observable);
}
function outputToObservable(ref) {
  const destroyRef = getOutputDestroyRef(ref);
  return new Observable((observer) => {
    const unregisterOnDestroy = destroyRef?.onDestroy(() => observer.complete());
    const subscription = ref.subscribe((v) => observer.next(v));
    return () => {
      subscription.unsubscribe();
      unregisterOnDestroy?.();
    };
  });
}

// node_modules/ngx-echarts/fesm2022/ngx-echarts.mjs
var NGX_ECHARTS_CONFIG = new InjectionToken("NGX_ECHARTS_CONFIG");
var ChangeFilterV2 = class {
  constructor() {
    this.subject = new ReplaySubject(1);
    this.subscriptions = new Subscription();
  }
  doFilter(changes) {
    this.subject.next(changes);
  }
  dispose() {
    this.subscriptions.unsubscribe();
  }
  notEmpty(key, handler) {
    this.subscriptions.add(this.subject.subscribe((changes) => {
      if (changes[key]) {
        const value = changes[key].currentValue;
        if (value !== void 0 && value !== null) {
          handler(value);
        }
      }
    }));
  }
  has(key, handler) {
    this.subscriptions.add(this.subject.subscribe((changes) => {
      if (changes[key]) {
        const value = changes[key].currentValue;
        handler(value);
      }
    }));
  }
  notFirst(key, handler) {
    this.subscriptions.add(this.subject.subscribe((changes) => {
      if (changes[key] && !changes[key].isFirstChange()) {
        const value = changes[key].currentValue;
        handler(value);
      }
    }));
  }
  notFirstAndEmpty(key, handler) {
    this.subscriptions.add(this.subject.subscribe((changes) => {
      if (changes[key] && !changes[key].isFirstChange()) {
        const value = changes[key].currentValue;
        if (value !== void 0 && value !== null) {
          handler(value);
        }
      }
    }));
  }
};
var _NgxEchartsDirective = class _NgxEchartsDirective {
  constructor() {
    this.el = inject(ElementRef);
    this.ngZone = inject(NgZone);
    this.config = inject(NGX_ECHARTS_CONFIG);
    this.options = input(null);
    this.theme = input(this.config.theme ?? null);
    this.initOpts = input(null);
    this.merge = input(null);
    this.autoResize = input(true);
    this.loading = input(false);
    this.loadingType = input("default");
    this.loadingOpts = input(null);
    this.chartInit = output();
    this.optionsError = output();
    this.chartClick = outputFromObservable(this.createLazyEvent("click"));
    this.chartDblClick = outputFromObservable(this.createLazyEvent("dblclick"));
    this.chartMouseDown = outputFromObservable(this.createLazyEvent("mousedown"));
    this.chartMouseMove = outputFromObservable(this.createLazyEvent("mousemove"));
    this.chartMouseUp = outputFromObservable(this.createLazyEvent("mouseup"));
    this.chartMouseOver = outputFromObservable(this.createLazyEvent("mouseover"));
    this.chartMouseOut = outputFromObservable(this.createLazyEvent("mouseout"));
    this.chartGlobalOut = outputFromObservable(this.createLazyEvent("globalout"));
    this.chartContextMenu = outputFromObservable(this.createLazyEvent("contextmenu"));
    this.chartHighlight = outputFromObservable(this.createLazyEvent("highlight"));
    this.chartDownplay = outputFromObservable(this.createLazyEvent("downplay"));
    this.chartSelectChanged = outputFromObservable(this.createLazyEvent("selectchanged"));
    this.chartLegendSelectChanged = outputFromObservable(this.createLazyEvent("legendselectchanged"));
    this.chartLegendSelected = outputFromObservable(this.createLazyEvent("legendselected"));
    this.chartLegendUnselected = outputFromObservable(this.createLazyEvent("legendunselected"));
    this.chartLegendLegendSelectAll = outputFromObservable(this.createLazyEvent("legendselectall"));
    this.chartLegendLegendInverseSelect = outputFromObservable(this.createLazyEvent("legendinverseselect"));
    this.chartLegendScroll = outputFromObservable(this.createLazyEvent("legendscroll"));
    this.chartDataZoom = outputFromObservable(this.createLazyEvent("datazoom"));
    this.chartDataRangeSelected = outputFromObservable(this.createLazyEvent("datarangeselected"));
    this.chartGraphRoam = outputFromObservable(this.createLazyEvent("graphroam"));
    this.chartGeoRoam = outputFromObservable(this.createLazyEvent("georoam"));
    this.chartTreeRoam = outputFromObservable(this.createLazyEvent("treeroam"));
    this.chartTimelineChanged = outputFromObservable(this.createLazyEvent("timelinechanged"));
    this.chartTimelinePlayChanged = outputFromObservable(this.createLazyEvent("timelineplaychanged"));
    this.chartRestore = outputFromObservable(this.createLazyEvent("restore"));
    this.chartDataViewChanged = outputFromObservable(this.createLazyEvent("dataviewchanged"));
    this.chartMagicTypeChanged = outputFromObservable(this.createLazyEvent("magictypechanged"));
    this.chartGeoSelectChanged = outputFromObservable(this.createLazyEvent("geoselectchanged"));
    this.chartGeoSelected = outputFromObservable(this.createLazyEvent("geoselected"));
    this.chartGeoUnselected = outputFromObservable(this.createLazyEvent("geounselected"));
    this.chartAxisAreaSelected = outputFromObservable(this.createLazyEvent("axisareaselected"));
    this.chartBrush = outputFromObservable(this.createLazyEvent("brush"));
    this.chartBrushEnd = outputFromObservable(this.createLazyEvent("brushend"));
    this.chartBrushSelected = outputFromObservable(this.createLazyEvent("brushselected"));
    this.chartGlobalCursorTaken = outputFromObservable(this.createLazyEvent("globalcursortaken"));
    this.chartRendered = outputFromObservable(this.createLazyEvent("rendered"));
    this.chartFinished = outputFromObservable(this.createLazyEvent("finished"));
    this.animationFrameID = null;
    this.chart$ = new ReplaySubject(1);
    this.resize$ = new Subject();
    this.changeFilter = new ChangeFilterV2();
    this.resizeObFired = false;
    this.echarts = this.config.echarts;
  }
  ngOnChanges(changes) {
    this.changeFilter.doFilter(changes);
  }
  ngOnInit() {
    if (!window.ResizeObserver) {
      throw new Error("please install a polyfill for ResizeObserver");
    }
    this.resizeSub = this.resize$.pipe(throttleTime(100, asyncScheduler, {
      leading: false,
      trailing: true
    })).subscribe(() => this.resize());
    if (this.autoResize()) {
      this.resizeOb = this.ngZone.runOutsideAngular(() => new window.ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.target === this.el.nativeElement) {
            if (!this.resizeObFired) {
              this.resizeObFired = true;
            } else {
              this.animationFrameID = window.requestAnimationFrame(() => {
                this.resize$.next();
              });
            }
          }
        }
      }));
      this.resizeOb.observe(this.el.nativeElement);
    }
    this.changeFilter.notFirstAndEmpty("options", (opt) => this.onOptionsChange(opt));
    this.changeFilter.notFirstAndEmpty("merge", (opt) => this.setOption(opt));
    this.changeFilter.has("loading", (v) => this.toggleLoading(!!v));
    this.changeFilter.notFirst("theme", () => this.refreshChart());
  }
  ngOnDestroy() {
    window.clearTimeout(this.initChartTimer);
    if (this.resizeSub) {
      this.resizeSub.unsubscribe();
    }
    if (this.animationFrameID) {
      window.cancelAnimationFrame(this.animationFrameID);
    }
    if (this.resizeOb) {
      this.resizeOb.unobserve(this.el.nativeElement);
    }
    if (this.loadingSub) {
      this.loadingSub.unsubscribe();
    }
    this.changeFilter.dispose();
    this.dispose();
  }
  ngAfterViewInit() {
    this.initChartTimer = window.setTimeout(() => this.initChart());
  }
  dispose() {
    if (this.chart) {
      if (!this.chart.isDisposed()) {
        this.chart.dispose();
      }
      this.chart = null;
    }
  }
  /**
   * resize chart
   */
  resize() {
    if (this.chart) {
      this.chart.resize();
    }
  }
  toggleLoading(loading) {
    if (this.chart) {
      loading ? this.chart.showLoading(this.loadingType(), this.loadingOpts()) : this.chart.hideLoading();
    } else {
      this.loadingSub = this.chart$.subscribe((chart) => loading ? chart.showLoading(this.loadingType(), this.loadingOpts()) : chart.hideLoading());
    }
  }
  setOption(option, opts) {
    if (this.chart) {
      try {
        this.chart.setOption(option, opts);
      } catch (e) {
        console.error(e);
        this.optionsError.emit(e);
      }
    }
  }
  /**
   * dispose old chart and create a new one.
   */
  refreshChart() {
    return __async(this, null, function* () {
      this.dispose();
      yield this.initChart();
    });
  }
  createChart() {
    const dom = this.el.nativeElement;
    if (window && window.getComputedStyle) {
      const prop = window.getComputedStyle(dom, null).getPropertyValue("height");
      if ((!prop || prop === "0px") && (!dom.style.height || dom.style.height === "0px")) {
        dom.style.height = "400px";
      }
    }
    return this.ngZone.runOutsideAngular(() => {
      const load = typeof this.echarts === "function" ? this.echarts : () => Promise.resolve(this.echarts);
      return load().then(({
        init
      }) => init(dom, this.theme() ?? this.config?.theme, this.initOpts()));
    });
  }
  initChart() {
    return __async(this, null, function* () {
      yield this.onOptionsChange(this.options());
      const merge = this.merge();
      if (merge && this.chart) {
        this.setOption(merge);
      }
    });
  }
  onOptionsChange(opt) {
    return __async(this, null, function* () {
      if (!opt) {
        return;
      }
      if (this.chart) {
        this.setOption(this.options(), true);
      } else {
        this.chart = yield this.createChart();
        this.chart$.next(this.chart);
        this.chartInit.emit(this.chart);
        this.setOption(this.options(), true);
      }
    });
  }
  // allows to lazily bind to only those events that are requested through the `output()` by parent components
  // see https://stackoverflow.com/questions/51787972/optimal-reentering-the-ngzone-from-eventemitter-event for more info
  createLazyEvent(eventName) {
    return outputToObservable(this.chartInit).pipe(switchMap((chart) => new Observable((observer) => {
      chart.on(eventName, (data) => this.ngZone.run(() => observer.next(data)));
      return () => {
        if (this.chart) {
          if (!this.chart.isDisposed()) {
            chart.off(eventName);
          }
        }
      };
    })));
  }
};
_NgxEchartsDirective.\u0275fac = function NgxEchartsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxEchartsDirective)();
};
_NgxEchartsDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgxEchartsDirective,
  selectors: [["echarts"], ["", "echarts", ""]],
  inputs: {
    options: [1, "options"],
    theme: [1, "theme"],
    initOpts: [1, "initOpts"],
    merge: [1, "merge"],
    autoResize: [1, "autoResize"],
    loading: [1, "loading"],
    loadingType: [1, "loadingType"],
    loadingOpts: [1, "loadingOpts"]
  },
  outputs: {
    chartInit: "chartInit",
    optionsError: "optionsError",
    chartClick: "chartClick",
    chartDblClick: "chartDblClick",
    chartMouseDown: "chartMouseDown",
    chartMouseMove: "chartMouseMove",
    chartMouseUp: "chartMouseUp",
    chartMouseOver: "chartMouseOver",
    chartMouseOut: "chartMouseOut",
    chartGlobalOut: "chartGlobalOut",
    chartContextMenu: "chartContextMenu",
    chartHighlight: "chartHighlight",
    chartDownplay: "chartDownplay",
    chartSelectChanged: "chartSelectChanged",
    chartLegendSelectChanged: "chartLegendSelectChanged",
    chartLegendSelected: "chartLegendSelected",
    chartLegendUnselected: "chartLegendUnselected",
    chartLegendLegendSelectAll: "chartLegendLegendSelectAll",
    chartLegendLegendInverseSelect: "chartLegendLegendInverseSelect",
    chartLegendScroll: "chartLegendScroll",
    chartDataZoom: "chartDataZoom",
    chartDataRangeSelected: "chartDataRangeSelected",
    chartGraphRoam: "chartGraphRoam",
    chartGeoRoam: "chartGeoRoam",
    chartTreeRoam: "chartTreeRoam",
    chartTimelineChanged: "chartTimelineChanged",
    chartTimelinePlayChanged: "chartTimelinePlayChanged",
    chartRestore: "chartRestore",
    chartDataViewChanged: "chartDataViewChanged",
    chartMagicTypeChanged: "chartMagicTypeChanged",
    chartGeoSelectChanged: "chartGeoSelectChanged",
    chartGeoSelected: "chartGeoSelected",
    chartGeoUnselected: "chartGeoUnselected",
    chartAxisAreaSelected: "chartAxisAreaSelected",
    chartBrush: "chartBrush",
    chartBrushEnd: "chartBrushEnd",
    chartBrushSelected: "chartBrushSelected",
    chartGlobalCursorTaken: "chartGlobalCursorTaken",
    chartRendered: "chartRendered",
    chartFinished: "chartFinished"
  },
  exportAs: ["echarts"],
  features: [\u0275\u0275NgOnChangesFeature]
});
var NgxEchartsDirective = _NgxEchartsDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxEchartsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "echarts, [echarts]",
      exportAs: "echarts"
    }]
  }], null, null);
})();
function provideEchartsCore(config) {
  return {
    provide: NGX_ECHARTS_CONFIG,
    useValue: config
  };
}
var _NgxEchartsModule = class _NgxEchartsModule {
  static forRoot(config) {
    return {
      ngModule: _NgxEchartsModule,
      providers: [provideEchartsCore(config)]
    };
  }
  static forChild() {
    return {
      ngModule: _NgxEchartsModule
    };
  }
};
_NgxEchartsModule.\u0275fac = function NgxEchartsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxEchartsModule)();
};
_NgxEchartsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NgxEchartsModule,
  imports: [NgxEchartsDirective],
  exports: [NgxEchartsDirective]
});
_NgxEchartsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var NgxEchartsModule = _NgxEchartsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxEchartsModule, [{
    type: NgModule,
    args: [{
      imports: [NgxEchartsDirective],
      exports: [NgxEchartsDirective]
    }]
  }], null, null);
})();

export {
  ChartComponent,
  NgApexchartsModule,
  NgxEchartsDirective,
  NgxEchartsModule
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v20.2.1
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-7GHBRQJK.js.map

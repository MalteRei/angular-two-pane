# Angular Duo Pane

**The Angular front-end library for building two dual screen web experiences.**

## Contents

- [Learn about dual screen development](#learn-about-dual-screen-development)
- [Using Angular Duo Pane](#using-angular-duo-pane)
    - [Integrating in your project](#integrating-in-your-project)
    - [Directive Parameters](#directive-parameters)
- [Examples](#exampes)
- [Contribute to Angular duo pane](#contribute-to-angular-duo-pane)
- [Licenses](#licenses)
- [Changelog](#changelog)

## Learn about dual screen development

[Microsoft Introduction to dual-screen devices](https://docs.microsoft.com/en-us/dual-screen/introduction)

[Develop cross-platform apps and websites for dual-screen devices](https://docs.microsoft.com/en-us/dual-screen/cross-platform/)

## Using Angular Duo Pane

The good news are that most things should work on dual screen devices just like they do on single screen devices.
However, two screens will bring a lot of benefits you can take advantage of. In addition, building more flexible web applications will make the experience on other form factors (i.e. large screen desktop and laptops) better.
With Angular Duo Pane it is really easy to develop for new form factors. It takes you only 8 lines of code and html. In addition app patterns for dual screen devices are really modular. As a result you can step by step add this functionality to more and more of your views without having to refactor the entire application. You will quickly see that your application provides many opportunities to incorporate these app patterns. Using Angular Duo Pane will provide a delightful experience for users on large screen, dual-screen and foldable devices without breaking your application and much work.
Please feel free to reach out to us if you need help.

### Integrating in your project

In your Angular project run:
```sh
ng add angular-duo-pane
```
This will add the package as a dependency in your `package.json` file and download it to `node_modules`.

Add needed package to NgModule imports:
```
import { AngularDuoPaneModule } from 'angular-duo-pane';

@NgModule({
  ...
  imports: [AngularDuoPaneModule,...]
  ...
})
```

Add directive to a template of a component to display as two pane:
```
<ng-template [duoPane] [secondaryPane]="secondaryBlock">
    <!-- The component you want to display inside primary pane. -->
</ng-template>
<ng-template #secondaryBlock>
    <!-- The component you want to display inside secondary pane. -->
</ng-template>
```

### Directive Parameters

<table>
  <tr>
    <th>Parameter</th>
    <th>Example</th>
    <th>Required</th>
    <th>Type</th>
    <th>Default value</th>
    <th>Description</th>
  </tr>
  <tr>
    <th align="left">duoPane</th>
    <td><code>[duoPane]</code></td>
    <td>yes</td>
    <td>-</td>
    <td>-</td>
    <td>
    Tells Angular duo pane that the component marked with [duoPane] is supposed to be displayed as the primary pane.
    </td>
  </tr>

  <tr>
    <th align="left">secondaryPane</th>
    <td><code>[secondaryPane]="#secondaryBlock"</code></td>
    <td>no</td>
    <td><code>TemplateRef<any></code></td>
    <td><code>undefined</code></td>
    <td>
    Provides a template reference to the component to display as the secondary pane. You should define this because displaying only the primary pane is pointless.
    </td>
  </tr>

  <tr>
    <th align="left">twoPaneMinWidthSingleSegment</th>
    <td><code>twoPaneMinWidthSingleSegment=1000</code></td>
    <td>no</td>
    <td><code>number</code></td>
    <td><code>0</code></td>
    <td>
    If the window width of the user is greater or equal to this parameter primary and secondary pane are both displayed.
    The default results in always showing both panes no matter how small the screen.
    </td>
  </tr>

  <tr>
    <th align="left">twoPaneMinHeightSingleSegment</th>
    <td><code>twoPaneMinHeightSingleSegment=500</code></td>
    <td>no</td>
    <td><code>number</code></td>
    <td><code>0</code></td>
    <td>
    If the window height of the user is greater or equal to this parameter primary and secondary pane are both displayed.
    The default results in always showing both panes no matter how small the screen.    
    </td>
  </tr>

  <tr>
    <th align="left">twoPaneSpanningModeSingleSegment</th>
    <td><code>twoPaneSpanningModeSingleSegment="single-fold-vertical"</code></td>
    <td>no</td>
    <td><code>type SpanningMode = 'single-fold-horizontal' | 'single-fold-vertical' | 'none'</code></td>
    <td><code>'none'</code></td>
    <td>
    When all other requirements for the window size is fulfilled on single screen devices this parameter defines how both panes are displayed.
    <ul>
        <li><code>'none'</code> – by default only the primary pane is displayed.
        <li><code>'single-fold-vertical'</code> – both panes are displayed side by side.
        <li><code>'single-fold-horizontal'</code> – the panes are split top and bottom.
    </ul>
    </td>
  </tr>

  <tr>
    <th align="left">primaryPanePercentageSingleSegment</th>
    <td><code>primaryPanePercentageSingleSegment=70</code></td>
    <td>no</td>
    <td><code>number</code></td>
    <td><code>50</code></td>
    <td>
    Sets the percentage of the available size reserved for the primary pane when displaying both panes on single screen devices.
    Default of 50% results in both panes taking up equal space.
    </td>
  </tr>

  <tr>
    <th align="left">ensureSecondaryPaneVisible</th>
    <td><code>ensureSecondaryPaneVisible=true</code></td>
    <td>no</td>
    <td><code>boolean</code></td>
    <td><code>false</code></td>
    <td>
    When set to true Angular duo pane will make sure that the secondary pane is visible. This can be used to navigate between panes on a small screen devices where it does not make sense to display both panes at the same time.
    Default value of <code>false</code> allows the secondary pane to not be visible.
    </td>
  </tr>

  <tr>
    <th align="left">secondaryPaneVisibilityHandler</th>
    <td><code>(secondaryPaneVisibilityHandler)="secondaryPaneVisibilityChangedEventHandler($event)"</code></td>
    <td>no</td>
    <td><code>EventEmitter<boolean></code></td>
    <td>-</td>
    <td>
    This allows you to find out whether or not the secondary pane is currently visible.
    Provide a function that takes a boolean value. Angular duo pane will call this function when the secondary pane becomes visible or invisible.
    </td>
  </tr>
</table>

## Examples

Do you want to try out Angular Duo Pane library or how dual screen patterns can work on the web. Check out the [the showcase](https://malterei.github.io/angular-two-pane/). More examples will be added to the list so check back frequently.

## Contribute to Fluent UI React

Please take a look at our [contribution guidelines](CONTRIBUTING.md) for more info.
Feel free to contact us if you have questions.
Use issues and GitHub [Kanban Board](https://github.com/MalteRei/angular-two-pane/projects/1) to collaborate.

## Licenses

All files on the Angular Duo Pane GitHub repository are subject to the MIT license. Please read the License file at the root of the project.


## Changelog

We use [GitHub Releases](https://github.com/blog/1547-release-your-software) to manage our releases, including the changelog between every release. View a complete list of additions, fixes, and changes on the [releases](https://github.com/MalteRei/angular-two-pane/releases) page.
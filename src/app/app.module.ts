import { TabViewModule } from 'primeng/tabview';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertySearchHeaderComponent } from './property-search-header/property-search-header.component';
import { PropertySearchComponent } from './property-search/property-search.component';
import { SafePipe } from './safe.pipe';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { LandingInfoCardComponent } from './landing-info-card/landing-info-card.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PropertyInformationComponent } from './property-information/property-information.component';
import { PropertyInformationImagesComponent } from './property-information-images/property-information-images.component';
import { PropertyInformationVirtualViewComponent } from './property-information-virtual-view/property-information-virtual-view.component';
import { PropertyInformationStreetViewComponent } from './property-information-street-view/property-information-street-view.component';
import { PropertyInformationDetailsComponent } from './property-information-details/property-information-details.component';
import { PropertyInformationNearbyCardsComponent } from './property-information-nearby-cards/property-information-nearby-cards.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PropertySearchService } from './property-search.service';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityDetailService } from './city-detail.service';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HouseModelMainComponent } from './house-model-main/house-model-main.component';
import { HouseMapGeneratorComponent } from './house-map-generator/house-map-generator.component';
import { HouseModelViewerComponent } from './house-model-viewer/house-model-viewer.component';
import { MyPropertyComponent } from './my-property/my-property.component';
import { MyPropertyRentComponent } from './my-property-rent/my-property-rent.component';
import { MyPropertySellComponent } from './my-property-sell/my-property-sell.component';
import { EditPropertyDetailComponent } from './edit-property-detail/edit-property-detail.component';
import { LoginComponent } from './login/login.component';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { TimelineModule } from 'primeng/timeline';
import { StepsModule } from 'primeng/steps';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CarouselModule } from 'primeng/carousel';
import { PropertyCreateStepsComponent } from './property-create-steps/property-create-steps.component';
import { CreatePropertyTimelineComponent } from './create-property-timeline/create-property-timeline.component';
import { CreatePropertySideInfoComponent } from './create-property-side-info/create-property-side-info.component';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { PropertyBasicDetailsComponent } from './property-basic-details/property-basic-details.component';
import { PropertyLocationDetailsComponent } from './property-location-details/property-location-details.component';
import { PropertyRoomDetailsComponent } from './property-room-details/property-room-details.component';
import { PropertyPricingComponent } from './property-pricing/property-pricing.component';
import { PropertyReviewComponent } from './property-review/property-review.component';
import { PropertyCreateInformationComponent } from './property-create-information/property-create-information.component';
import { PropertyCreateImagesComponent } from './property-create-images/property-create-images.component';
import { GalleriaModule } from 'primeng/galleria';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AuthInterceptor } from './auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { AdminComponent } from './admin/admin.component';
import { AdminCardComponent } from './admin-card/admin-card.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import {ColorPickerModule} from 'primeng/colorpicker';
import {InputSwitchModule} from 'primeng/inputswitch';

@NgModule({
  declarations: [
    AppComponent,
    PropertySearchComponent,
    PropertySearchHeaderComponent,
    SafePipe,
    LandingHeaderComponent,
    LandingInfoCardComponent,
    LandingFooterComponent,
    LandingPageComponent,
    PropertyInformationComponent,
    PropertyInformationImagesComponent,
    PropertyInformationVirtualViewComponent,
    PropertyInformationStreetViewComponent,
    PropertyInformationDetailsComponent,
    PropertyInformationNearbyCardsComponent,
    AuthPageComponent,
    CreatePropertyComponent,
    ErrorPageComponent,
    HouseModelMainComponent,
    HouseMapGeneratorComponent,
    HouseModelViewerComponent,
    MyPropertyComponent,
    MyPropertyRentComponent,
    MyPropertySellComponent,
    EditPropertyDetailComponent,
    PropertyCreateStepsComponent,
    CreatePropertyTimelineComponent,
    CreatePropertySideInfoComponent,
    PropertyBasicDetailsComponent,
    PropertyLocationDetailsComponent,
    PropertyRoomDetailsComponent,
    PropertyPricingComponent,
    PropertyReviewComponent,
    PropertyCreateInformationComponent,
    PropertyCreateImagesComponent,
    LoginComponent,
    AdminComponent,
    AdminCardComponent,
    EmailVerifyComponent,
    PasswordResetComponent,
  ],
  imports: [
    TabViewModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxSliderModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ProgressBarModule,
    InputTextareaModule,
    CarouselModule,
    MenubarModule,
    DropdownModule,
    TimelineModule,
    StepsModule,
    RadioButtonModule,
    PanelModule,
    PaginatorModule,
    CardModule,
    ChipModule,
    AutoCompleteModule,
    InputNumberModule,
    FileUploadModule,
    GalleriaModule,
    ProgressSpinnerModule,
    ToastrModule.forRoot(),
    DialogModule,
    ColorPickerModule,
    InputSwitchModule
  ],
  providers: [
    PropertySearchService,
    CityDetailService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    DialogModule,
    PaginatorModule,
  ],
  bootstrap: [AppComponent],
  // for aframe custom html tags
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

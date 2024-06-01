import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';
import { CoreUiModule } from 'app/core-ui/core-ui.module';
import { ManagementComponent } from './management.component';
import { CreateMarketComponent } from './create-market/create-market.component';
import { JoinWithDetailsModalComponent } from './joined-markets/join-with-details-modal/join-with-details-modal.component';
import { JoinedMarketsComponent } from './joined-markets/joined-markets.component';
import { LeaveMarketConfirmationModalComponent } from './joined-markets/leave-market-modal/leave-market-modal.component';
import { CategoryEditorModalComponent } from './joined-markets/category-editor-modal/category-editor-modal.component';
import { MarketGovernanceModalComponent } from './market-governance-modal/market-governance-modal.component';
import { MarketManagementService } from './management.service';


const routes: Routes = [
  { path: '', component: ManagementComponent, data: { title: 'Manage Markets'} },
  { path: 'create', component: CreateMarketComponent, data: { title: 'Create Market'} }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CoreUiModule,
    ClipboardModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ManagementComponent,
    JoinWithDetailsModalComponent,
    JoinedMarketsComponent,
    LeaveMarketConfirmationModalComponent,
    CategoryEditorModalComponent,

    CreateMarketComponent,

    MarketGovernanceModalComponent
  ],
  entryComponents: [
    JoinWithDetailsModalComponent,

    LeaveMarketConfirmationModalComponent,
    CategoryEditorModalComponent,

    MarketGovernanceModalComponent
  ],
  providers: [
    MarketManagementService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManagementModule { }

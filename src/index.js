/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AccessKey from './model/AccessKey';
import AccessKeyResponse from './model/AccessKeyResponse';
import Acl from './model/Acl';
import AclEntry from './model/AclEntry';
import AclEntryResponse from './model/AclEntryResponse';
import AclEntryResponseAllOf from './model/AclEntryResponseAllOf';
import AclResponse from './model/AclResponse';
import AclResponseAllOf from './model/AclResponseAllOf';
import AiAcceleratorResponseBodyEnable from './model/AiAcceleratorResponseBodyEnable';
import AiAcceleratorResponseCustomer from './model/AiAcceleratorResponseCustomer';
import AiAcceleratorResponseCustomerCustomer from './model/AiAcceleratorResponseCustomerCustomer';
import AiAcceleratorResponseLinks from './model/AiAcceleratorResponseLinks';
import AiAcceleratorResponseLinksLinks from './model/AiAcceleratorResponseLinksLinks';
import AiAcceleratorResponseProduct from './model/AiAcceleratorResponseProduct';
import AiAcceleratorResponseProductProduct from './model/AiAcceleratorResponseProductProduct';
import ApexRedirect from './model/ApexRedirect';
import ApexRedirectAllOf from './model/ApexRedirectAllOf';
import ApiDiscoveryResponseBodyGetAllServices from './model/ApiDiscoveryResponseBodyGetAllServices';
import ApiDiscoveryResponseCustomer from './model/ApiDiscoveryResponseCustomer';
import ApiDiscoveryResponseCustomerCustomer from './model/ApiDiscoveryResponseCustomerCustomer';
import ApiDiscoveryResponseEnable from './model/ApiDiscoveryResponseEnable';
import ApiDiscoveryResponseEnabledServices from './model/ApiDiscoveryResponseEnabledServices';
import ApiDiscoveryResponseLinks from './model/ApiDiscoveryResponseLinks';
import ApiDiscoveryResponseLinksGetAllServices from './model/ApiDiscoveryResponseLinksGetAllServices';
import ApiDiscoveryResponseLinksGetAllServicesLinks from './model/ApiDiscoveryResponseLinksGetAllServicesLinks';
import ApiDiscoveryResponseLinksLinks from './model/ApiDiscoveryResponseLinksLinks';
import ApiDiscoveryResponseProduct from './model/ApiDiscoveryResponseProduct';
import ApiDiscoveryResponseProductProduct from './model/ApiDiscoveryResponseProductProduct';
import ApiDiscoveryResponseService from './model/ApiDiscoveryResponseService';
import ApiDiscoveryResponseServiceService from './model/ApiDiscoveryResponseServiceService';
import AsyncResponse from './model/AsyncResponse';
import AttackReport from './model/AttackReport';
import AttackSignal from './model/AttackSignal';
import AttackSource from './model/AttackSource';
import AutomationToken from './model/AutomationToken';
import AutomationTokenCreateRequest from './model/AutomationTokenCreateRequest';
import AutomationTokenCreateRequestAttributes from './model/AutomationTokenCreateRequestAttributes';
import AutomationTokenCreateResponse from './model/AutomationTokenCreateResponse';
import AutomationTokenCreateResponseAllOf from './model/AutomationTokenCreateResponseAllOf';
import AutomationTokenErrorResponse from './model/AutomationTokenErrorResponse';
import AutomationTokenResponse from './model/AutomationTokenResponse';
import AutomationTokenResponseAllOf from './model/AutomationTokenResponseAllOf';
import AwsRegion from './model/AwsRegion';
import Backend from './model/Backend';
import BackendResponse from './model/BackendResponse';
import BackendResponseAllOf from './model/BackendResponseAllOf';
import BillingAddressAttributes from './model/BillingAddressAttributes';
import BillingAddressRequest from './model/BillingAddressRequest';
import BillingAddressRequestData from './model/BillingAddressRequestData';
import BillingAddressResponse from './model/BillingAddressResponse';
import BillingAddressResponseData from './model/BillingAddressResponseData';
import BillingAddressVerificationErrorResponse from './model/BillingAddressVerificationErrorResponse';
import BillingAddressVerificationErrorResponseErrors from './model/BillingAddressVerificationErrorResponseErrors';
import BotManagementResponseBodyEnable from './model/BotManagementResponseBodyEnable';
import BotManagementResponseBodyGetAllServices from './model/BotManagementResponseBodyGetAllServices';
import BotManagementResponseCustomer from './model/BotManagementResponseCustomer';
import BotManagementResponseCustomerCustomer from './model/BotManagementResponseCustomerCustomer';
import BotManagementResponseEnabledServices from './model/BotManagementResponseEnabledServices';
import BotManagementResponseLinks from './model/BotManagementResponseLinks';
import BotManagementResponseLinksGetAllServices from './model/BotManagementResponseLinksGetAllServices';
import BotManagementResponseLinksGetAllServicesLinks from './model/BotManagementResponseLinksGetAllServicesLinks';
import BotManagementResponseLinksLinks from './model/BotManagementResponseLinksLinks';
import BotManagementResponseProduct from './model/BotManagementResponseProduct';
import BotManagementResponseProductProduct from './model/BotManagementResponseProductProduct';
import BotManagementResponseService from './model/BotManagementResponseService';
import BrotliCompressionResponseBodyEnable from './model/BrotliCompressionResponseBodyEnable';
import BrotliCompressionResponseBodyGetAllServices from './model/BrotliCompressionResponseBodyGetAllServices';
import BrotliCompressionResponseCustomer from './model/BrotliCompressionResponseCustomer';
import BrotliCompressionResponseEnabledServices from './model/BrotliCompressionResponseEnabledServices';
import BrotliCompressionResponseLinks from './model/BrotliCompressionResponseLinks';
import BrotliCompressionResponseLinksGetAllServices from './model/BrotliCompressionResponseLinksGetAllServices';
import BrotliCompressionResponseLinksGetAllServicesLinks from './model/BrotliCompressionResponseLinksGetAllServicesLinks';
import BrotliCompressionResponseLinksLinks from './model/BrotliCompressionResponseLinksLinks';
import BrotliCompressionResponseProduct from './model/BrotliCompressionResponseProduct';
import BrotliCompressionResponseProductProduct from './model/BrotliCompressionResponseProductProduct';
import BrotliCompressionResponseService from './model/BrotliCompressionResponseService';
import BulkUpdateAclEntriesRequest from './model/BulkUpdateAclEntriesRequest';
import BulkUpdateAclEntry from './model/BulkUpdateAclEntry';
import BulkUpdateAclEntryAllOf from './model/BulkUpdateAclEntryAllOf';
import BulkUpdateConfigStoreItem from './model/BulkUpdateConfigStoreItem';
import BulkUpdateConfigStoreItemAllOf from './model/BulkUpdateConfigStoreItemAllOf';
import BulkUpdateConfigStoreListRequest from './model/BulkUpdateConfigStoreListRequest';
import BulkUpdateDictionaryItem from './model/BulkUpdateDictionaryItem';
import BulkUpdateDictionaryListRequest from './model/BulkUpdateDictionaryListRequest';
import CacheSetting from './model/CacheSetting';
import CacheSettingResponse from './model/CacheSettingResponse';
import ClientKey from './model/ClientKey';
import ComputeAclCreateAclsRequest from './model/ComputeAclCreateAclsRequest';
import ComputeAclCreateAclsResponse from './model/ComputeAclCreateAclsResponse';
import ComputeAclList from './model/ComputeAclList';
import ComputeAclListEntries from './model/ComputeAclListEntries';
import ComputeAclListEntriesItem from './model/ComputeAclListEntriesItem';
import ComputeAclListEntriesMeta from './model/ComputeAclListEntriesMeta';
import ComputeAclListMeta from './model/ComputeAclListMeta';
import ComputeAclLookup from './model/ComputeAclLookup';
import ComputeAclUpdate from './model/ComputeAclUpdate';
import ComputeAclUpdateEntry from './model/ComputeAclUpdateEntry';
import Condition from './model/Condition';
import ConditionResponse from './model/ConditionResponse';
import ConfigStore from './model/ConfigStore';
import ConfigStoreInfoResponse from './model/ConfigStoreInfoResponse';
import ConfigStoreItem from './model/ConfigStoreItem';
import ConfigStoreItemResponse from './model/ConfigStoreItemResponse';
import ConfigStoreItemResponseAllOf from './model/ConfigStoreItemResponseAllOf';
import ConfigStoreResponse from './model/ConfigStoreResponse';
import ConfigStoreResponseAllOf from './model/ConfigStoreResponseAllOf';
import Contact from './model/Contact';
import ContactResponse from './model/ContactResponse';
import ContactResponseAllOf from './model/ContactResponseAllOf';
import Content from './model/Content';
import CreateDashboardRequest from './model/CreateDashboardRequest';
import CreateResponseObjectRequest from './model/CreateResponseObjectRequest';
import Customer from './model/Customer';
import CustomerAddress from './model/CustomerAddress';
import CustomerResponse from './model/CustomerResponse';
import CustomerResponseAllOf from './model/CustomerResponseAllOf';
import Dashboard from './model/Dashboard';
import DashboardItem from './model/DashboardItem';
import DashboardItemPropertyDataSource from './model/DashboardItemPropertyDataSource';
import DashboardItemPropertyDataSourcePropertyConfig from './model/DashboardItemPropertyDataSourcePropertyConfig';
import DashboardItemPropertyVisualization from './model/DashboardItemPropertyVisualization';
import DashboardItemPropertyVisualizationPropertyConfig from './model/DashboardItemPropertyVisualizationPropertyConfig';
import DashboardPropertyCreatedBy from './model/DashboardPropertyCreatedBy';
import DashboardPropertyUpdatedBy from './model/DashboardPropertyUpdatedBy';
import DdosProtectionAttributeStats from './model/DdosProtectionAttributeStats';
import DdosProtectionAttributeValue from './model/DdosProtectionAttributeValue';
import DdosProtectionError from './model/DdosProtectionError';
import DdosProtectionErrorErrors from './model/DdosProtectionErrorErrors';
import DdosProtectionEvent from './model/DdosProtectionEvent';
import DdosProtectionEventAllOf from './model/DdosProtectionEventAllOf';
import DdosProtectionInvalidRequest from './model/DdosProtectionInvalidRequest';
import DdosProtectionNotAuthenticated from './model/DdosProtectionNotAuthenticated';
import DdosProtectionNotAuthorized from './model/DdosProtectionNotAuthorized';
import DdosProtectionNotFound from './model/DdosProtectionNotFound';
import DdosProtectionRequestEnableMode from './model/DdosProtectionRequestEnableMode';
import DdosProtectionRequestUpdateConfiguration from './model/DdosProtectionRequestUpdateConfiguration';
import DdosProtectionResponseBodyGetAllServices from './model/DdosProtectionResponseBodyGetAllServices';
import DdosProtectionResponseConfiguration from './model/DdosProtectionResponseConfiguration';
import DdosProtectionResponseConfigurationConfiguration from './model/DdosProtectionResponseConfigurationConfiguration';
import DdosProtectionResponseConfigure from './model/DdosProtectionResponseConfigure';
import DdosProtectionResponseCustomer from './model/DdosProtectionResponseCustomer';
import DdosProtectionResponseEnable from './model/DdosProtectionResponseEnable';
import DdosProtectionResponseEnabledServices from './model/DdosProtectionResponseEnabledServices';
import DdosProtectionResponseLinks from './model/DdosProtectionResponseLinks';
import DdosProtectionResponseLinksGetAllServices from './model/DdosProtectionResponseLinksGetAllServices';
import DdosProtectionResponseLinksGetAllServicesLinks from './model/DdosProtectionResponseLinksGetAllServicesLinks';
import DdosProtectionResponseLinksLinks from './model/DdosProtectionResponseLinksLinks';
import DdosProtectionResponseProduct from './model/DdosProtectionResponseProduct';
import DdosProtectionResponseProductProduct from './model/DdosProtectionResponseProductProduct';
import DdosProtectionResponseService from './model/DdosProtectionResponseService';
import DdosProtectionRule from './model/DdosProtectionRule';
import DdosProtectionRuleAllOf from './model/DdosProtectionRuleAllOf';
import DdosProtectionRulePatch from './model/DdosProtectionRulePatch';
import DdosProtectionRuleWithStats from './model/DdosProtectionRuleWithStats';
import DdosProtectionRuleWithStatsAllOf from './model/DdosProtectionRuleWithStatsAllOf';
import DdosProtectionTrafficStats from './model/DdosProtectionTrafficStats';
import DdosProtectionTrafficStatsAllOf from './model/DdosProtectionTrafficStatsAllOf';
import DefaultSettings from './model/DefaultSettings';
import DefaultSettingsError from './model/DefaultSettingsError';
import DefaultSettingsResponse from './model/DefaultSettingsResponse';
import Dictionary from './model/Dictionary';
import DictionaryInfoResponse from './model/DictionaryInfoResponse';
import DictionaryItem from './model/DictionaryItem';
import DictionaryItemResponse from './model/DictionaryItemResponse';
import DictionaryItemResponseAllOf from './model/DictionaryItemResponseAllOf';
import DictionaryResponse from './model/DictionaryResponse';
import DictionaryResponseAllOf from './model/DictionaryResponseAllOf';
import DiffResponse from './model/DiffResponse';
import DimensionAttributesCountryStats from './model/DimensionAttributesCountryStats';
import DimensionAttributesRate from './model/DimensionAttributesRate';
import DimensionBrowser from './model/DimensionBrowser';
import DimensionContentType from './model/DimensionContentType';
import DimensionCountry from './model/DimensionCountry';
import DimensionDevice from './model/DimensionDevice';
import DimensionOs from './model/DimensionOs';
import DimensionResponse from './model/DimensionResponse';
import DimensionStatusCode from './model/DimensionStatusCode';
import DimensionUrl from './model/DimensionUrl';
import Director from './model/Director';
import DirectorBackend from './model/DirectorBackend';
import DirectorBackendAllOf from './model/DirectorBackendAllOf';
import DirectorResponse from './model/DirectorResponse';
import DiscoveredOperationBase from './model/DiscoveredOperationBase';
import DiscoveredOperationGet from './model/DiscoveredOperationGet';
import DiscoveredOperationGetExtra from './model/DiscoveredOperationGetExtra';
import Domain from './model/Domain';
import DomainInspector from './model/DomainInspector';
import DomainInspectorEntry from './model/DomainInspectorEntry';
import DomainInspectorEntryDimensions from './model/DomainInspectorEntryDimensions';
import DomainInspectorMeasurements from './model/DomainInspectorMeasurements';
import DomainInspectorRealtimeEntry from './model/DomainInspectorRealtimeEntry';
import DomainInspectorResponseBodyEnable from './model/DomainInspectorResponseBodyEnable';
import DomainInspectorResponseBodyGetAllServices from './model/DomainInspectorResponseBodyGetAllServices';
import DomainInspectorResponseCustomer from './model/DomainInspectorResponseCustomer';
import DomainInspectorResponseEnabledServices from './model/DomainInspectorResponseEnabledServices';
import DomainInspectorResponseLinks from './model/DomainInspectorResponseLinks';
import DomainInspectorResponseLinksGetAllServices from './model/DomainInspectorResponseLinksGetAllServices';
import DomainInspectorResponseLinksGetAllServicesLinks from './model/DomainInspectorResponseLinksGetAllServicesLinks';
import DomainInspectorResponseLinksLinks from './model/DomainInspectorResponseLinksLinks';
import DomainInspectorResponseProduct from './model/DomainInspectorResponseProduct';
import DomainInspectorResponseProductProduct from './model/DomainInspectorResponseProductProduct';
import DomainInspectorResponseService from './model/DomainInspectorResponseService';
import DomainResearchResponseBodyEnable from './model/DomainResearchResponseBodyEnable';
import DomainResearchResponseCustomer from './model/DomainResearchResponseCustomer';
import DomainResearchResponseLinks from './model/DomainResearchResponseLinks';
import DomainResearchResponseLinksLinks from './model/DomainResearchResponseLinksLinks';
import DomainResearchResponseProduct from './model/DomainResearchResponseProduct';
import DomainResearchResponseProductProduct from './model/DomainResearchResponseProductProduct';
import DomainResponse from './model/DomainResponse';
import Environment from './model/Environment';
import EnvironmentName from './model/EnvironmentName';
import EomInvoiceResponse from './model/EomInvoiceResponse';
import Error from './model/Error';
import ErrorResponseData from './model/ErrorResponseData';
import Event from './model/Event';
import EventAttributes from './model/EventAttributes';
import EventData from './model/EventData';
import EventResponse from './model/EventResponse';
import EventsResponse from './model/EventsResponse';
import FanoutResponseBodyEnable from './model/FanoutResponseBodyEnable';
import FanoutResponseBodyGetAllServices from './model/FanoutResponseBodyGetAllServices';
import FanoutResponseCustomer from './model/FanoutResponseCustomer';
import FanoutResponseEnabledServices from './model/FanoutResponseEnabledServices';
import FanoutResponseLinks from './model/FanoutResponseLinks';
import FanoutResponseLinksGetAllServices from './model/FanoutResponseLinksGetAllServices';
import FanoutResponseLinksGetAllServicesLinks from './model/FanoutResponseLinksGetAllServicesLinks';
import FanoutResponseLinksLinks from './model/FanoutResponseLinksLinks';
import FanoutResponseProduct from './model/FanoutResponseProduct';
import FanoutResponseProductProduct from './model/FanoutResponseProductProduct';
import FanoutResponseService from './model/FanoutResponseService';
import FilterFieldItem from './model/FilterFieldItem';
import GenericTokenError from './model/GenericTokenError';
import GetLogInsightsResponse from './model/GetLogInsightsResponse';
import GetLogRecordsResponse from './model/GetLogRecordsResponse';
import GetLogRecordsResponseMeta from './model/GetLogRecordsResponseMeta';
import GetLogRecordsResponseMetaFilters from './model/GetLogRecordsResponseMetaFilters';
import GetServiceLevelUsageResponse from './model/GetServiceLevelUsageResponse';
import GetServiceLevelUsageTypesResponse from './model/GetServiceLevelUsageTypesResponse';
import Gzip from './model/Gzip';
import GzipResponse from './model/GzipResponse';
import Header from './model/Header';
import HeaderResponse from './model/HeaderResponse';
import Healthcheck from './model/Healthcheck';
import HealthcheckResponse from './model/HealthcheckResponse';
import Historical from './model/Historical';
import HistoricalDdos from './model/HistoricalDdos';
import HistoricalDdosMeta from './model/HistoricalDdosMeta';
import HistoricalDomains from './model/HistoricalDomains';
import HistoricalDomainsData from './model/HistoricalDomainsData';
import HistoricalDomainsMeta from './model/HistoricalDomainsMeta';
import HistoricalDomainsMetaFilters from './model/HistoricalDomainsMetaFilters';
import HistoricalDomainsResponse from './model/HistoricalDomainsResponse';
import HistoricalDomainsResponseAllOf from './model/HistoricalDomainsResponseAllOf';
import HistoricalMeta from './model/HistoricalMeta';
import HistoricalOriginsResponse from './model/HistoricalOriginsResponse';
import HistoricalOriginsResponseAllOf from './model/HistoricalOriginsResponseAllOf';
import HistoricalRegionsResponse from './model/HistoricalRegionsResponse';
import HistoricalRegionsResponseAllOf from './model/HistoricalRegionsResponseAllOf';
import HistoricalStatsAggregatedResponse from './model/HistoricalStatsAggregatedResponse';
import HistoricalStatsAggregatedResponseAllOf from './model/HistoricalStatsAggregatedResponseAllOf';
import HistoricalStatsByServiceResponse from './model/HistoricalStatsByServiceResponse';
import HistoricalStatsByServiceResponseAllOf from './model/HistoricalStatsByServiceResponseAllOf';
import HistoricalUsageAggregatedResponse from './model/HistoricalUsageAggregatedResponse';
import HistoricalUsageAggregatedResponseAllOf from './model/HistoricalUsageAggregatedResponseAllOf';
import HistoricalUsageData from './model/HistoricalUsageData';
import HistoricalUsageMonthResponse from './model/HistoricalUsageMonthResponse';
import HistoricalUsageMonthResponseAllOf from './model/HistoricalUsageMonthResponseAllOf';
import HistoricalUsageMonthResponseData from './model/HistoricalUsageMonthResponseData';
import HistoricalUsageService from './model/HistoricalUsageService';
import HistoricalUsageServiceResponse from './model/HistoricalUsageServiceResponse';
import HistoricalUsageServiceResponseAllOf from './model/HistoricalUsageServiceResponseAllOf';
import Http3 from './model/Http3';
import Http3AllOf from './model/Http3AllOf';
import HttpResponseFormat from './model/HttpResponseFormat';
import HttpStreamFormat from './model/HttpStreamFormat';
import IamPermission from './model/IamPermission';
import IamServiceGroup from './model/IamServiceGroup';
import IamServiceGroupAllOf from './model/IamServiceGroupAllOf';
import IamUserGroup from './model/IamUserGroup';
import IamUserGroupAllOf from './model/IamUserGroupAllOf';
import IamV1RoleListResponse from './model/IamV1RoleListResponse';
import IamV1RoleResponse from './model/IamV1RoleResponse';
import ImageOptimizerResponseBodyEnable from './model/ImageOptimizerResponseBodyEnable';
import ImageOptimizerResponseBodyGetAllServices from './model/ImageOptimizerResponseBodyGetAllServices';
import ImageOptimizerResponseCustomer from './model/ImageOptimizerResponseCustomer';
import ImageOptimizerResponseEnabledServices from './model/ImageOptimizerResponseEnabledServices';
import ImageOptimizerResponseLinks from './model/ImageOptimizerResponseLinks';
import ImageOptimizerResponseLinksGetAllServices from './model/ImageOptimizerResponseLinksGetAllServices';
import ImageOptimizerResponseLinksGetAllServicesLinks from './model/ImageOptimizerResponseLinksGetAllServicesLinks';
import ImageOptimizerResponseLinksLinks from './model/ImageOptimizerResponseLinksLinks';
import ImageOptimizerResponseProduct from './model/ImageOptimizerResponseProduct';
import ImageOptimizerResponseProductProduct from './model/ImageOptimizerResponseProductProduct';
import ImageOptimizerResponseService from './model/ImageOptimizerResponseService';
import IncludedWithTlsConfiguration from './model/IncludedWithTlsConfiguration';
import IncludedWithTlsConfigurationItem from './model/IncludedWithTlsConfigurationItem';
import InlineObject from './model/InlineObject';
import InlineObject1 from './model/InlineObject1';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse20010 from './model/InlineResponse20010';
import InlineResponse20011 from './model/InlineResponse20011';
import InlineResponse20012 from './model/InlineResponse20012';
import InlineResponse20013 from './model/InlineResponse20013';
import InlineResponse20014 from './model/InlineResponse20014';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2004 from './model/InlineResponse2004';
import InlineResponse2005 from './model/InlineResponse2005';
import InlineResponse2006 from './model/InlineResponse2006';
import InlineResponse2007 from './model/InlineResponse2007';
import InlineResponse2008 from './model/InlineResponse2008';
import InlineResponse2009 from './model/InlineResponse2009';
import InlineResponse201 from './model/InlineResponse201';
import InlineResponse400 from './model/InlineResponse400';
import Invitation from './model/Invitation';
import InvitationCreateData from './model/InvitationCreateData';
import InvitationCreateDataAllOf from './model/InvitationCreateDataAllOf';
import InvitationCreateResponse from './model/InvitationCreateResponse';
import InvitationCreateResponseAllOf from './model/InvitationCreateResponseAllOf';
import InvitationData from './model/InvitationData';
import InvitationDataAttributes from './model/InvitationDataAttributes';
import InvitationResponseData from './model/InvitationResponseData';
import InvitationResponseDataAllOf from './model/InvitationResponseDataAllOf';
import InvitationsResponse from './model/InvitationsResponse';
import InvitationsResponseAllOf from './model/InvitationsResponseAllOf';
import Invoice from './model/Invoice';
import Invoicelineitems from './model/Invoicelineitems';
import KvStoreBatchResponse from './model/KvStoreBatchResponse';
import KvStoreBatchResponseErrors from './model/KvStoreBatchResponseErrors';
import KvStoreDetails from './model/KvStoreDetails';
import KvStoreRequestCreateOrUpdate from './model/KvStoreRequestCreateOrUpdate';
import KvStoreUpsertBatch from './model/KvStoreUpsertBatch';
import ListAttackReport from './model/ListAttackReport';
import ListAttackReportMeta from './model/ListAttackReportMeta';
import ListCustomerAddressesResponse from './model/ListCustomerAddressesResponse';
import ListDashboardsResponse from './model/ListDashboardsResponse';
import ListEomInvoicesResponse from './model/ListEomInvoicesResponse';
import ListSignalReport from './model/ListSignalReport';
import Listinvoices from './model/Listinvoices';
import LogAggregationsFilterFieldItem from './model/LogAggregationsFilterFieldItem';
import LogAggregationsGetResponse from './model/LogAggregationsGetResponse';
import LogAggregationsGetResponseMeta from './model/LogAggregationsGetResponseMeta';
import LogAggregationsGetResponseMetaFilters from './model/LogAggregationsGetResponseMetaFilters';
import LogAggregationsResult from './model/LogAggregationsResult';
import LogAggregationsValueField from './model/LogAggregationsValueField';
import LogExplorerInsightsResponseBodyEnable from './model/LogExplorerInsightsResponseBodyEnable';
import LogExplorerInsightsResponseBodyGetAllServices from './model/LogExplorerInsightsResponseBodyGetAllServices';
import LogExplorerInsightsResponseCustomer from './model/LogExplorerInsightsResponseCustomer';
import LogExplorerInsightsResponseEnabledServices from './model/LogExplorerInsightsResponseEnabledServices';
import LogExplorerInsightsResponseLinks from './model/LogExplorerInsightsResponseLinks';
import LogExplorerInsightsResponseLinksGetAllServices from './model/LogExplorerInsightsResponseLinksGetAllServices';
import LogExplorerInsightsResponseLinksGetAllServicesLinks from './model/LogExplorerInsightsResponseLinksGetAllServicesLinks';
import LogExplorerInsightsResponseLinksLinks from './model/LogExplorerInsightsResponseLinksLinks';
import LogExplorerInsightsResponseProduct from './model/LogExplorerInsightsResponseProduct';
import LogExplorerInsightsResponseProductProduct from './model/LogExplorerInsightsResponseProductProduct';
import LogExplorerInsightsResponseService from './model/LogExplorerInsightsResponseService';
import LogInsights from './model/LogInsights';
import LogInsightsDimensionAttributes from './model/LogInsightsDimensionAttributes';
import LogInsightsDimensions from './model/LogInsightsDimensions';
import LogInsightsMeta from './model/LogInsightsMeta';
import LogInsightsMetaFilter from './model/LogInsightsMetaFilter';
import LogInsightsValues from './model/LogInsightsValues';
import LogPropertyServiceId from './model/LogPropertyServiceId';
import LogRecord from './model/LogRecord';
import LoggingAddressAndPort from './model/LoggingAddressAndPort';
import LoggingAzureblobAdditional from './model/LoggingAzureblobAdditional';
import LoggingAzureblobResponse from './model/LoggingAzureblobResponse';
import LoggingBigqueryAdditional from './model/LoggingBigqueryAdditional';
import LoggingBigqueryResponse from './model/LoggingBigqueryResponse';
import LoggingCloudfilesAdditional from './model/LoggingCloudfilesAdditional';
import LoggingCloudfilesResponse from './model/LoggingCloudfilesResponse';
import LoggingCommon from './model/LoggingCommon';
import LoggingCommonResponse from './model/LoggingCommonResponse';
import LoggingCommonResponseAllOf from './model/LoggingCommonResponseAllOf';
import LoggingCommonResponseAllOf1 from './model/LoggingCommonResponseAllOf1';
import LoggingDatadogAdditional from './model/LoggingDatadogAdditional';
import LoggingDatadogResponse from './model/LoggingDatadogResponse';
import LoggingDigitaloceanAdditional from './model/LoggingDigitaloceanAdditional';
import LoggingDigitaloceanResponse from './model/LoggingDigitaloceanResponse';
import LoggingElasticsearchAdditional from './model/LoggingElasticsearchAdditional';
import LoggingElasticsearchResponse from './model/LoggingElasticsearchResponse';
import LoggingFormatVersionInteger from './model/LoggingFormatVersionInteger';
import LoggingFormatVersionString from './model/LoggingFormatVersionString';
import LoggingFtpAdditional from './model/LoggingFtpAdditional';
import LoggingFtpResponse from './model/LoggingFtpResponse';
import LoggingFtpResponseAllOf from './model/LoggingFtpResponseAllOf';
import LoggingGcsAdditional from './model/LoggingGcsAdditional';
import LoggingGcsCommon from './model/LoggingGcsCommon';
import LoggingGcsResponse from './model/LoggingGcsResponse';
import LoggingGenericCommon from './model/LoggingGenericCommon';
import LoggingGenericCommonResponse from './model/LoggingGenericCommonResponse';
import LoggingGenericCommonResponseAllOf from './model/LoggingGenericCommonResponseAllOf';
import LoggingGenericCommonResponseAllOf1 from './model/LoggingGenericCommonResponseAllOf1';
import LoggingGooglePubsubAdditional from './model/LoggingGooglePubsubAdditional';
import LoggingGooglePubsubResponse from './model/LoggingGooglePubsubResponse';
import LoggingGrafanacloudlogsAdditional from './model/LoggingGrafanacloudlogsAdditional';
import LoggingGrafanacloudlogsResponse from './model/LoggingGrafanacloudlogsResponse';
import LoggingHerokuAdditional from './model/LoggingHerokuAdditional';
import LoggingHerokuResponse from './model/LoggingHerokuResponse';
import LoggingHoneycombAdditional from './model/LoggingHoneycombAdditional';
import LoggingHoneycombResponse from './model/LoggingHoneycombResponse';
import LoggingHttpsAdditional from './model/LoggingHttpsAdditional';
import LoggingHttpsResponse from './model/LoggingHttpsResponse';
import LoggingKafkaAdditional from './model/LoggingKafkaAdditional';
import LoggingKafkaResponse from './model/LoggingKafkaResponse';
import LoggingKafkaResponsePost from './model/LoggingKafkaResponsePost';
import LoggingKinesisAdditional from './model/LoggingKinesisAdditional';
import LoggingKinesisResponse from './model/LoggingKinesisResponse';
import LoggingLogentriesAdditional from './model/LoggingLogentriesAdditional';
import LoggingLogentriesResponse from './model/LoggingLogentriesResponse';
import LoggingLogglyAdditional from './model/LoggingLogglyAdditional';
import LoggingLogglyResponse from './model/LoggingLogglyResponse';
import LoggingLogshuttleAdditional from './model/LoggingLogshuttleAdditional';
import LoggingLogshuttleResponse from './model/LoggingLogshuttleResponse';
import LoggingMessageType from './model/LoggingMessageType';
import LoggingNewrelicAdditional from './model/LoggingNewrelicAdditional';
import LoggingNewrelicResponse from './model/LoggingNewrelicResponse';
import LoggingNewrelicotlpAdditional from './model/LoggingNewrelicotlpAdditional';
import LoggingNewrelicotlpResponse from './model/LoggingNewrelicotlpResponse';
import LoggingOpenstackAdditional from './model/LoggingOpenstackAdditional';
import LoggingOpenstackResponse from './model/LoggingOpenstackResponse';
import LoggingPapertrailResponse from './model/LoggingPapertrailResponse';
import LoggingPlacement from './model/LoggingPlacement';
import LoggingRequestCapsCommon from './model/LoggingRequestCapsCommon';
import LoggingS3Additional from './model/LoggingS3Additional';
import LoggingS3Response from './model/LoggingS3Response';
import LoggingScalyrAdditional from './model/LoggingScalyrAdditional';
import LoggingScalyrResponse from './model/LoggingScalyrResponse';
import LoggingSftpAdditional from './model/LoggingSftpAdditional';
import LoggingSftpResponse from './model/LoggingSftpResponse';
import LoggingSftpResponseAllOf from './model/LoggingSftpResponseAllOf';
import LoggingSplunkAdditional from './model/LoggingSplunkAdditional';
import LoggingSplunkResponse from './model/LoggingSplunkResponse';
import LoggingSumologicAdditional from './model/LoggingSumologicAdditional';
import LoggingSumologicResponse from './model/LoggingSumologicResponse';
import LoggingSyslogAdditional from './model/LoggingSyslogAdditional';
import LoggingSyslogResponse from './model/LoggingSyslogResponse';
import LoggingTlsCommon from './model/LoggingTlsCommon';
import LoggingUseTlsString from './model/LoggingUseTlsString';
import Meta from './model/Meta';
import Metadata from './model/Metadata';
import MtdInvoiceResponse from './model/MtdInvoiceResponse';
import Mtdinvoice from './model/Mtdinvoice';
import Mtdlineitems from './model/Mtdlineitems';
import MutualAuthentication from './model/MutualAuthentication';
import MutualAuthenticationData from './model/MutualAuthenticationData';
import MutualAuthenticationDataAttributes from './model/MutualAuthenticationDataAttributes';
import MutualAuthenticationResponse from './model/MutualAuthenticationResponse';
import MutualAuthenticationResponseAttributes from './model/MutualAuthenticationResponseAttributes';
import MutualAuthenticationResponseAttributesAllOf from './model/MutualAuthenticationResponseAttributesAllOf';
import MutualAuthenticationResponseData from './model/MutualAuthenticationResponseData';
import MutualAuthenticationResponseDataAllOf from './model/MutualAuthenticationResponseDataAllOf';
import MutualAuthenticationsResponse from './model/MutualAuthenticationsResponse';
import MutualAuthenticationsResponseAllOf from './model/MutualAuthenticationsResponseAllOf';
import NgwafRequestEnable from './model/NgwafRequestEnable';
import NgwafRequestUpdateConfiguration from './model/NgwafRequestUpdateConfiguration';
import NgwafResponseBodyGetAllServices from './model/NgwafResponseBodyGetAllServices';
import NgwafResponseConfiguration from './model/NgwafResponseConfiguration';
import NgwafResponseConfigurationConfiguration from './model/NgwafResponseConfigurationConfiguration';
import NgwafResponseConfigure from './model/NgwafResponseConfigure';
import NgwafResponseCustomer from './model/NgwafResponseCustomer';
import NgwafResponseEnable from './model/NgwafResponseEnable';
import NgwafResponseEnabledServices from './model/NgwafResponseEnabledServices';
import NgwafResponseLinks from './model/NgwafResponseLinks';
import NgwafResponseLinksGetAllServices from './model/NgwafResponseLinksGetAllServices';
import NgwafResponseLinksGetAllServicesLinks from './model/NgwafResponseLinksGetAllServicesLinks';
import NgwafResponseLinksLinks from './model/NgwafResponseLinksLinks';
import NgwafResponseProduct from './model/NgwafResponseProduct';
import NgwafResponseProductProduct from './model/NgwafResponseProductProduct';
import NgwafResponseService from './model/NgwafResponseService';
import ObjectStorageResponseBodyEnable from './model/ObjectStorageResponseBodyEnable';
import ObjectStorageResponseCustomer from './model/ObjectStorageResponseCustomer';
import ObjectStorageResponseLinks from './model/ObjectStorageResponseLinks';
import ObjectStorageResponseLinksLinks from './model/ObjectStorageResponseLinksLinks';
import ObjectStorageResponseProduct from './model/ObjectStorageResponseProduct';
import ObjectStorageResponseProductProduct from './model/ObjectStorageResponseProductProduct';
import Offer from './model/Offer';
import OfferAllOf from './model/OfferAllOf';
import OperationBase from './model/OperationBase';
import OperationCreate from './model/OperationCreate';
import OperationGet from './model/OperationGet';
import OperationGetExtra from './model/OperationGetExtra';
import OperationUpdate from './model/OperationUpdate';
import OriginInspector from './model/OriginInspector';
import OriginInspectorDimensions from './model/OriginInspectorDimensions';
import OriginInspectorEntry from './model/OriginInspectorEntry';
import OriginInspectorHistorical from './model/OriginInspectorHistorical';
import OriginInspectorHistoricalData from './model/OriginInspectorHistoricalData';
import OriginInspectorHistoricalMeta from './model/OriginInspectorHistoricalMeta';
import OriginInspectorHistoricalMetaFilters from './model/OriginInspectorHistoricalMetaFilters';
import OriginInspectorMeasurements from './model/OriginInspectorMeasurements';
import OriginInspectorRealtimeEntry from './model/OriginInspectorRealtimeEntry';
import OriginInspectorResponseBodyEnable from './model/OriginInspectorResponseBodyEnable';
import OriginInspectorResponseBodyGetAllServices from './model/OriginInspectorResponseBodyGetAllServices';
import OriginInspectorResponseCustomer from './model/OriginInspectorResponseCustomer';
import OriginInspectorResponseEnabledServices from './model/OriginInspectorResponseEnabledServices';
import OriginInspectorResponseLinks from './model/OriginInspectorResponseLinks';
import OriginInspectorResponseLinksGetAllServices from './model/OriginInspectorResponseLinksGetAllServices';
import OriginInspectorResponseLinksGetAllServicesLinks from './model/OriginInspectorResponseLinksGetAllServicesLinks';
import OriginInspectorResponseLinksLinks from './model/OriginInspectorResponseLinksLinks';
import OriginInspectorResponseProduct from './model/OriginInspectorResponseProduct';
import OriginInspectorResponseProductProduct from './model/OriginInspectorResponseProductProduct';
import OriginInspectorResponseService from './model/OriginInspectorResponseService';
import OriginInspectorValues from './model/OriginInspectorValues';
import Package from './model/Package';
import PackageMetadata from './model/PackageMetadata';
import PackageResponse from './model/PackageResponse';
import PackageResponseAllOf from './model/PackageResponseAllOf';
import Pagination from './model/Pagination';
import PaginationCursorMeta from './model/PaginationCursorMeta';
import PaginationLinks from './model/PaginationLinks';
import PaginationMeta from './model/PaginationMeta';
import Permission from './model/Permission';
import PlatformDdosDataItems from './model/PlatformDdosDataItems';
import PlatformDdosEntry from './model/PlatformDdosEntry';
import PlatformDdosResponse from './model/PlatformDdosResponse';
import PlatformDdosResponseAllOf from './model/PlatformDdosResponseAllOf';
import PlatformMetadata from './model/PlatformMetadata';
import PlatformMetricsResponse from './model/PlatformMetricsResponse';
import PlatformValues from './model/PlatformValues';
import PoolAdditional from './model/PoolAdditional';
import PoolResponse from './model/PoolResponse';
import PoolResponseAllOf from './model/PoolResponseAllOf';
import PoolResponseCommon from './model/PoolResponseCommon';
import PoolResponsePost from './model/PoolResponsePost';
import PoolResponsePostAllOf from './model/PoolResponsePostAllOf';
import Pop from './model/Pop';
import PopCoordinates from './model/PopCoordinates';
import PublicIpList from './model/PublicIpList';
import PublishItem from './model/PublishItem';
import PublishItemFormats from './model/PublishItemFormats';
import PublishRequest from './model/PublishRequest';
import PurgeKeys from './model/PurgeKeys';
import PurgeResponse from './model/PurgeResponse';
import RateLimiter from './model/RateLimiter';
import RateLimiterResponse from './model/RateLimiterResponse';
import RateLimiterResponseAllOf from './model/RateLimiterResponseAllOf';
import ReadOnlyCustomerId from './model/ReadOnlyCustomerId';
import ReadOnlyId from './model/ReadOnlyId';
import ReadOnlyUserId from './model/ReadOnlyUserId';
import Realtime from './model/Realtime';
import RealtimeEntry from './model/RealtimeEntry';
import RealtimeEntryAggregated from './model/RealtimeEntryAggregated';
import RealtimeEntryRecorded from './model/RealtimeEntryRecorded';
import RealtimeMeasurements from './model/RealtimeMeasurements';
import RelationshipCommonName from './model/RelationshipCommonName';
import RelationshipCustomer from './model/RelationshipCustomer';
import RelationshipCustomerCustomer from './model/RelationshipCustomerCustomer';
import RelationshipDefaultEcdsaTlsCertificate from './model/RelationshipDefaultEcdsaTlsCertificate';
import RelationshipDefaultEcdsaTlsCertificateDefaultEcdsaCertificate from './model/RelationshipDefaultEcdsaTlsCertificateDefaultEcdsaCertificate';
import RelationshipDefaultEcdsaTlsCertificateDefaultEcdsaCertificateData from './model/RelationshipDefaultEcdsaTlsCertificateDefaultEcdsaCertificateData';
import RelationshipDefaultTlsCertificate from './model/RelationshipDefaultTlsCertificate';
import RelationshipDefaultTlsCertificateDefaultCertificate from './model/RelationshipDefaultTlsCertificateDefaultCertificate';
import RelationshipDefaultTlsCertificateDefaultCertificateData from './model/RelationshipDefaultTlsCertificateDefaultCertificateData';
import RelationshipMemberCustomer from './model/RelationshipMemberCustomer';
import RelationshipMemberMutualAuthentication from './model/RelationshipMemberMutualAuthentication';
import RelationshipMemberService from './model/RelationshipMemberService';
import RelationshipMemberServiceInvitation from './model/RelationshipMemberServiceInvitation';
import RelationshipMemberTlsActivation from './model/RelationshipMemberTlsActivation';
import RelationshipMemberTlsBulkCertificate from './model/RelationshipMemberTlsBulkCertificate';
import RelationshipMemberTlsCertificate from './model/RelationshipMemberTlsCertificate';
import RelationshipMemberTlsConfiguration from './model/RelationshipMemberTlsConfiguration';
import RelationshipMemberTlsDomain from './model/RelationshipMemberTlsDomain';
import RelationshipMemberTlsPrivateKey from './model/RelationshipMemberTlsPrivateKey';
import RelationshipMemberTlsSubscription from './model/RelationshipMemberTlsSubscription';
import RelationshipMutualAuthentication from './model/RelationshipMutualAuthentication';
import RelationshipMutualAuthenticationMutualAuthentication from './model/RelationshipMutualAuthenticationMutualAuthentication';
import RelationshipMutualAuthentications from './model/RelationshipMutualAuthentications';
import RelationshipMutualAuthenticationsMutualAuthentications from './model/RelationshipMutualAuthenticationsMutualAuthentications';
import RelationshipService from './model/RelationshipService';
import RelationshipServiceInvitations from './model/RelationshipServiceInvitations';
import RelationshipServiceInvitationsCreate from './model/RelationshipServiceInvitationsCreate';
import RelationshipServiceInvitationsCreateServiceInvitations from './model/RelationshipServiceInvitationsCreateServiceInvitations';
import RelationshipServiceInvitationsServiceInvitations from './model/RelationshipServiceInvitationsServiceInvitations';
import RelationshipServices from './model/RelationshipServices';
import RelationshipServicesServices from './model/RelationshipServicesServices';
import RelationshipTlsActivation from './model/RelationshipTlsActivation';
import RelationshipTlsActivationTlsActivation from './model/RelationshipTlsActivationTlsActivation';
import RelationshipTlsActivations from './model/RelationshipTlsActivations';
import RelationshipTlsBulkCertificate from './model/RelationshipTlsBulkCertificate';
import RelationshipTlsBulkCertificateTlsBulkCertificate from './model/RelationshipTlsBulkCertificateTlsBulkCertificate';
import RelationshipTlsBulkCertificates from './model/RelationshipTlsBulkCertificates';
import RelationshipTlsCertificate from './model/RelationshipTlsCertificate';
import RelationshipTlsCertificateTlsCertificate from './model/RelationshipTlsCertificateTlsCertificate';
import RelationshipTlsCertificates from './model/RelationshipTlsCertificates';
import RelationshipTlsCertificatesTlsCertificates from './model/RelationshipTlsCertificatesTlsCertificates';
import RelationshipTlsConfiguration from './model/RelationshipTlsConfiguration';
import RelationshipTlsConfigurationForTlsSubscription from './model/RelationshipTlsConfigurationForTlsSubscription';
import RelationshipTlsConfigurationTlsConfiguration from './model/RelationshipTlsConfigurationTlsConfiguration';
import RelationshipTlsConfigurations from './model/RelationshipTlsConfigurations';
import RelationshipTlsConfigurationsTlsConfigurations from './model/RelationshipTlsConfigurationsTlsConfigurations';
import RelationshipTlsDnsRecordsRequest from './model/RelationshipTlsDnsRecordsRequest';
import RelationshipTlsDnsRecordsRequestDnsRecords from './model/RelationshipTlsDnsRecordsRequestDnsRecords';
import RelationshipTlsDnsRecordsRequestDnsRecordsData from './model/RelationshipTlsDnsRecordsRequestDnsRecordsData';
import RelationshipTlsDnsRecordsResponse from './model/RelationshipTlsDnsRecordsResponse';
import RelationshipTlsDnsRecordsResponseDnsRecords from './model/RelationshipTlsDnsRecordsResponseDnsRecords';
import RelationshipTlsDnsRecordsResponseDnsRecordsData from './model/RelationshipTlsDnsRecordsResponseDnsRecordsData';
import RelationshipTlsDomain from './model/RelationshipTlsDomain';
import RelationshipTlsDomainTlsDomain from './model/RelationshipTlsDomainTlsDomain';
import RelationshipTlsDomains from './model/RelationshipTlsDomains';
import RelationshipTlsDomainsTlsDomains from './model/RelationshipTlsDomainsTlsDomains';
import RelationshipTlsPrivateKey from './model/RelationshipTlsPrivateKey';
import RelationshipTlsPrivateKeyTlsPrivateKey from './model/RelationshipTlsPrivateKeyTlsPrivateKey';
import RelationshipTlsPrivateKeys from './model/RelationshipTlsPrivateKeys';
import RelationshipTlsPrivateKeysTlsPrivateKeys from './model/RelationshipTlsPrivateKeysTlsPrivateKeys';
import RelationshipTlsSubscription from './model/RelationshipTlsSubscription';
import RelationshipTlsSubscriptionTlsSubscription from './model/RelationshipTlsSubscriptionTlsSubscription';
import RelationshipTlsSubscriptions from './model/RelationshipTlsSubscriptions';
import RelationshipUser from './model/RelationshipUser';
import RelationshipUserUser from './model/RelationshipUserUser';
import RelationshipsForInvitation from './model/RelationshipsForInvitation';
import RelationshipsForMutualAuthentication from './model/RelationshipsForMutualAuthentication';
import RelationshipsForStar from './model/RelationshipsForStar';
import RelationshipsForTlsActivation from './model/RelationshipsForTlsActivation';
import RelationshipsForTlsBulkCertificate from './model/RelationshipsForTlsBulkCertificate';
import RelationshipsForTlsConfiguration from './model/RelationshipsForTlsConfiguration';
import RelationshipsForTlsDomain from './model/RelationshipsForTlsDomain';
import RelationshipsForTlsPrivateKey from './model/RelationshipsForTlsPrivateKey';
import RelationshipsForTlsSubscription from './model/RelationshipsForTlsSubscription';
import RequestBodyForCreate from './model/RequestBodyForCreate';
import RequestBodyForUpdate from './model/RequestBodyForUpdate';
import RequestSettingsAdditional from './model/RequestSettingsAdditional';
import RequestSettingsResponse from './model/RequestSettingsResponse';
import RequestSettingsResponseAllOf from './model/RequestSettingsResponseAllOf';
import Resource from './model/Resource';
import ResourceResponse from './model/ResourceResponse';
import ResourceResponseAllOf from './model/ResourceResponseAllOf';
import ResponseObject from './model/ResponseObject';
import ResponseObjectResponse from './model/ResponseObjectResponse';
import Results from './model/Results';
import RoleUser from './model/RoleUser';
import SchemasContactResponse from './model/SchemasContactResponse';
import SchemasSnippetResponse from './model/SchemasSnippetResponse';
import SchemasUserResponse from './model/SchemasUserResponse';
import SchemasUserResponseReadOnly from './model/SchemasUserResponseReadOnly';
import SchemasVclResponse from './model/SchemasVclResponse';
import SchemasVersion from './model/SchemasVersion';
import SchemasVersionResponse from './model/SchemasVersionResponse';
import Secret from './model/Secret';
import SecretResponse from './model/SecretResponse';
import SecretStore from './model/SecretStore';
import SecretStoreResponse from './model/SecretStoreResponse';
import Server from './model/Server';
import ServerResponse from './model/ServerResponse';
import ServerResponseAllOf from './model/ServerResponseAllOf';
import Service from './model/Service';
import ServiceAuthorization from './model/ServiceAuthorization';
import ServiceAuthorizationData from './model/ServiceAuthorizationData';
import ServiceAuthorizationDataAttributes from './model/ServiceAuthorizationDataAttributes';
import ServiceAuthorizationDataRelationships from './model/ServiceAuthorizationDataRelationships';
import ServiceAuthorizationDataRelationshipsUser from './model/ServiceAuthorizationDataRelationshipsUser';
import ServiceAuthorizationDataRelationshipsUserData from './model/ServiceAuthorizationDataRelationshipsUserData';
import ServiceAuthorizationResponse from './model/ServiceAuthorizationResponse';
import ServiceAuthorizationResponseData from './model/ServiceAuthorizationResponseData';
import ServiceAuthorizationResponseDataAllOf from './model/ServiceAuthorizationResponseDataAllOf';
import ServiceAuthorizationsResponse from './model/ServiceAuthorizationsResponse';
import ServiceAuthorizationsResponseAllOf from './model/ServiceAuthorizationsResponseAllOf';
import ServiceCreate from './model/ServiceCreate';
import ServiceCreateAllOf from './model/ServiceCreateAllOf';
import ServiceDetail from './model/ServiceDetail';
import ServiceDetailAllOf from './model/ServiceDetailAllOf';
import ServiceIdAndVersion from './model/ServiceIdAndVersion';
import ServiceIdAndVersionString from './model/ServiceIdAndVersionString';
import ServiceInvitation from './model/ServiceInvitation';
import ServiceInvitationData from './model/ServiceInvitationData';
import ServiceInvitationDataAttributes from './model/ServiceInvitationDataAttributes';
import ServiceInvitationDataRelationships from './model/ServiceInvitationDataRelationships';
import ServiceInvitationResponse from './model/ServiceInvitationResponse';
import ServiceInvitationResponseAllOf from './model/ServiceInvitationResponseAllOf';
import ServiceInvitationResponseAllOfData from './model/ServiceInvitationResponseAllOfData';
import ServiceListResponse from './model/ServiceListResponse';
import ServiceListResponseAllOf from './model/ServiceListResponseAllOf';
import ServiceResponse from './model/ServiceResponse';
import ServiceResponseAllOf from './model/ServiceResponseAllOf';
import ServiceVersionDetail from './model/ServiceVersionDetail';
import ServiceVersionDetailOrNull from './model/ServiceVersionDetailOrNull';
import Serviceusagemetric from './model/Serviceusagemetric';
import Serviceusagemetrics from './model/Serviceusagemetrics';
import ServiceusagemetricsData from './model/ServiceusagemetricsData';
import Serviceusagetype from './model/Serviceusagetype';
import Serviceusagetypes from './model/Serviceusagetypes';
import Settings from './model/Settings';
import SettingsResponse from './model/SettingsResponse';
import SignalReport from './model/SignalReport';
import SigningKey from './model/SigningKey';
import Snippet from './model/Snippet';
import SnippetResponse from './model/SnippetResponse';
import SnippetResponseAllOf from './model/SnippetResponseAllOf';
import Star from './model/Star';
import StarData from './model/StarData';
import StarResponse from './model/StarResponse';
import StarResponseAllOf from './model/StarResponseAllOf';
import Stats from './model/Stats';
import Status from './model/Status';
import StatusAllOf from './model/StatusAllOf';
import SuccessfulResponseAsObject from './model/SuccessfulResponseAsObject';
import SuccessfulResponseAsObjectAllOf from './model/SuccessfulResponseAsObjectAllOf';
import SudoGenericTokenError from './model/SudoGenericTokenError';
import SudoRequest from './model/SudoRequest';
import SudoResponse from './model/SudoResponse';
import Suggestion from './model/Suggestion';
import SuggestionAllOf from './model/SuggestionAllOf';
import TagBase from './model/TagBase';
import TagCreate from './model/TagCreate';
import TagGet from './model/TagGet';
import TagGetExtra from './model/TagGetExtra';
import TimeseriesGetResponse from './model/TimeseriesGetResponse';
import TimeseriesMeta from './model/TimeseriesMeta';
import TimeseriesResult from './model/TimeseriesResult';
import Timestamps from './model/Timestamps';
import TimestampsNoDelete from './model/TimestampsNoDelete';
import TlsActivation from './model/TlsActivation';
import TlsActivationData from './model/TlsActivationData';
import TlsActivationResponse from './model/TlsActivationResponse';
import TlsActivationResponseData from './model/TlsActivationResponseData';
import TlsActivationResponseDataAllOf from './model/TlsActivationResponseDataAllOf';
import TlsActivationsResponse from './model/TlsActivationsResponse';
import TlsActivationsResponseAllOf from './model/TlsActivationsResponseAllOf';
import TlsBulkCertificate from './model/TlsBulkCertificate';
import TlsBulkCertificateData from './model/TlsBulkCertificateData';
import TlsBulkCertificateDataAttributes from './model/TlsBulkCertificateDataAttributes';
import TlsBulkCertificateResponse from './model/TlsBulkCertificateResponse';
import TlsBulkCertificateResponseAttributes from './model/TlsBulkCertificateResponseAttributes';
import TlsBulkCertificateResponseAttributesAllOf from './model/TlsBulkCertificateResponseAttributesAllOf';
import TlsBulkCertificateResponseData from './model/TlsBulkCertificateResponseData';
import TlsBulkCertificateResponseDataAllOf from './model/TlsBulkCertificateResponseDataAllOf';
import TlsBulkCertificatesResponse from './model/TlsBulkCertificatesResponse';
import TlsBulkCertificatesResponseAllOf from './model/TlsBulkCertificatesResponseAllOf';
import TlsCertificate from './model/TlsCertificate';
import TlsCertificateBlobResponse from './model/TlsCertificateBlobResponse';
import TlsCertificateData from './model/TlsCertificateData';
import TlsCertificateDataAttributes from './model/TlsCertificateDataAttributes';
import TlsCertificateResponse from './model/TlsCertificateResponse';
import TlsCertificateResponseAttributes from './model/TlsCertificateResponseAttributes';
import TlsCertificateResponseAttributesAllOf from './model/TlsCertificateResponseAttributesAllOf';
import TlsCertificateResponseData from './model/TlsCertificateResponseData';
import TlsCertificateResponseDataAllOf from './model/TlsCertificateResponseDataAllOf';
import TlsCertificatesResponse from './model/TlsCertificatesResponse';
import TlsCertificatesResponseAllOf from './model/TlsCertificatesResponseAllOf';
import TlsCommonResponse from './model/TlsCommonResponse';
import TlsCommonResponseAllOf from './model/TlsCommonResponseAllOf';
import TlsCommonResponseAllOf1 from './model/TlsCommonResponseAllOf1';
import TlsConfiguration from './model/TlsConfiguration';
import TlsConfigurationData from './model/TlsConfigurationData';
import TlsConfigurationDataAttributes from './model/TlsConfigurationDataAttributes';
import TlsConfigurationResponse from './model/TlsConfigurationResponse';
import TlsConfigurationResponseAttributes from './model/TlsConfigurationResponseAttributes';
import TlsConfigurationResponseAttributesAllOf from './model/TlsConfigurationResponseAttributesAllOf';
import TlsConfigurationResponseData from './model/TlsConfigurationResponseData';
import TlsConfigurationResponseDataAllOf from './model/TlsConfigurationResponseDataAllOf';
import TlsConfigurationsResponse from './model/TlsConfigurationsResponse';
import TlsConfigurationsResponseAllOf from './model/TlsConfigurationsResponseAllOf';
import TlsCsr from './model/TlsCsr';
import TlsCsrData from './model/TlsCsrData';
import TlsCsrDataAttributes from './model/TlsCsrDataAttributes';
import TlsCsrErrorResponse from './model/TlsCsrErrorResponse';
import TlsCsrResponse from './model/TlsCsrResponse';
import TlsCsrResponseAttributes from './model/TlsCsrResponseAttributes';
import TlsCsrResponseData from './model/TlsCsrResponseData';
import TlsDnsRecord from './model/TlsDnsRecord';
import TlsDomainData from './model/TlsDomainData';
import TlsDomainsResponse from './model/TlsDomainsResponse';
import TlsDomainsResponseAllOf from './model/TlsDomainsResponseAllOf';
import TlsPrivateKey from './model/TlsPrivateKey';
import TlsPrivateKeyData from './model/TlsPrivateKeyData';
import TlsPrivateKeyDataAttributes from './model/TlsPrivateKeyDataAttributes';
import TlsPrivateKeyResponse from './model/TlsPrivateKeyResponse';
import TlsPrivateKeyResponseAttributes from './model/TlsPrivateKeyResponseAttributes';
import TlsPrivateKeyResponseAttributesAllOf from './model/TlsPrivateKeyResponseAttributesAllOf';
import TlsPrivateKeyResponseData from './model/TlsPrivateKeyResponseData';
import TlsPrivateKeysResponse from './model/TlsPrivateKeysResponse';
import TlsPrivateKeysResponseAllOf from './model/TlsPrivateKeysResponseAllOf';
import TlsSubscription from './model/TlsSubscription';
import TlsSubscriptionData from './model/TlsSubscriptionData';
import TlsSubscriptionDataAttributes from './model/TlsSubscriptionDataAttributes';
import TlsSubscriptionResponse from './model/TlsSubscriptionResponse';
import TlsSubscriptionResponseAttributes from './model/TlsSubscriptionResponseAttributes';
import TlsSubscriptionResponseAttributesAllOf from './model/TlsSubscriptionResponseAttributesAllOf';
import TlsSubscriptionResponseData from './model/TlsSubscriptionResponseData';
import TlsSubscriptionsResponse from './model/TlsSubscriptionsResponse';
import TlsSubscriptionsResponseAllOf from './model/TlsSubscriptionsResponseAllOf';
import Token from './model/Token';
import TokenCreatedResponse from './model/TokenCreatedResponse';
import TokenCreatedResponseAllOf from './model/TokenCreatedResponseAllOf';
import TokenResponse from './model/TokenResponse';
import TokenResponseAllOf from './model/TokenResponseAllOf';
import TokensAdditionalProps from './model/TokensAdditionalProps';
import TopWorkspace from './model/TopWorkspace';
import TypeBillingAddress from './model/TypeBillingAddress';
import TypeContact from './model/TypeContact';
import TypeCustomer from './model/TypeCustomer';
import TypeEvent from './model/TypeEvent';
import TypeInvitation from './model/TypeInvitation';
import TypeMutualAuthentication from './model/TypeMutualAuthentication';
import TypeResource from './model/TypeResource';
import TypeService from './model/TypeService';
import TypeServiceAuthorization from './model/TypeServiceAuthorization';
import TypeServiceInvitation from './model/TypeServiceInvitation';
import TypeStar from './model/TypeStar';
import TypeTlsActivation from './model/TypeTlsActivation';
import TypeTlsBulkCertificate from './model/TypeTlsBulkCertificate';
import TypeTlsCertificate from './model/TypeTlsCertificate';
import TypeTlsConfiguration from './model/TypeTlsConfiguration';
import TypeTlsCsr from './model/TypeTlsCsr';
import TypeTlsDnsRecord from './model/TypeTlsDnsRecord';
import TypeTlsDomain from './model/TypeTlsDomain';
import TypeTlsPrivateKey from './model/TypeTlsPrivateKey';
import TypeTlsSubscription from './model/TypeTlsSubscription';
import TypeUser from './model/TypeUser';
import UpdateBillingAddressRequest from './model/UpdateBillingAddressRequest';
import UpdateBillingAddressRequestData from './model/UpdateBillingAddressRequestData';
import UpdateDashboardRequest from './model/UpdateDashboardRequest';
import Usagemetric from './model/Usagemetric';
import Usagemetrics from './model/Usagemetrics';
import User from './model/User';
import UserResponse from './model/UserResponse';
import UserResponseReadOnly from './model/UserResponseReadOnly';
import ValidatorResult from './model/ValidatorResult';
import ValidatorResultData from './model/ValidatorResultData';
import ValidatorResultDataAttributes from './model/ValidatorResultDataAttributes';
import ValidatorResultDataAttributesMessages from './model/ValidatorResultDataAttributesMessages';
import ValueField from './model/ValueField';
import Values from './model/Values';
import Values503Responses from './model/Values503Responses';
import ValuesBandwidth from './model/ValuesBandwidth';
import ValuesBrowser from './model/ValuesBrowser';
import ValuesCacheHitRatio from './model/ValuesCacheHitRatio';
import ValuesCountryStats from './model/ValuesCountryStats';
import ValuesDdos from './model/ValuesDdos';
import ValuesDuration from './model/ValuesDuration';
import ValuesMisses from './model/ValuesMisses';
import ValuesRate from './model/ValuesRate';
import ValuesRequests from './model/ValuesRequests';
import ValuesStatusCodes from './model/ValuesStatusCodes';
import Vcl from './model/Vcl';
import VclDiff from './model/VclDiff';
import VclResponse from './model/VclResponse';
import VclSyntaxHighlightingResponse from './model/VclSyntaxHighlightingResponse';
import Version from './model/Version';
import VersionCreateResponse from './model/VersionCreateResponse';
import VersionDetail from './model/VersionDetail';
import VersionDetailSettings from './model/VersionDetailSettings';
import VersionResponse from './model/VersionResponse';
import VersionResponseAllOf from './model/VersionResponseAllOf';
import WebsocketsResponseBodyEnable from './model/WebsocketsResponseBodyEnable';
import WebsocketsResponseBodyGetAllServices from './model/WebsocketsResponseBodyGetAllServices';
import WebsocketsResponseCustomer from './model/WebsocketsResponseCustomer';
import WebsocketsResponseEnabledServices from './model/WebsocketsResponseEnabledServices';
import WebsocketsResponseLinks from './model/WebsocketsResponseLinks';
import WebsocketsResponseLinksGetAllServices from './model/WebsocketsResponseLinksGetAllServices';
import WebsocketsResponseLinksGetAllServicesLinks from './model/WebsocketsResponseLinksGetAllServicesLinks';
import WebsocketsResponseLinksLinks from './model/WebsocketsResponseLinksLinks';
import WebsocketsResponseProduct from './model/WebsocketsResponseProduct';
import WebsocketsResponseProductProduct from './model/WebsocketsResponseProductProduct';
import WebsocketsResponseService from './model/WebsocketsResponseService';
import WsMessageFormat from './model/WsMessageFormat';
import AclApi from './api/AclApi';
import AclEntryApi from './api/AclEntryApi';
import AclsInComputeApi from './api/AclsInComputeApi';
import ApexRedirectApi from './api/ApexRedirectApi';
import ApisecurityOperationsApi from './api/ApisecurityOperationsApi';
import AutomationTokensApi from './api/AutomationTokensApi';
import BackendApi from './api/BackendApi';
import BillingAddressApi from './api/BillingAddressApi';
import BillingInvoicesApi from './api/BillingInvoicesApi';
import BillingUsageMetricsApi from './api/BillingUsageMetricsApi';
import CacheSettingsApi from './api/CacheSettingsApi';
import ConditionApi from './api/ConditionApi';
import ConfigStoreApi from './api/ConfigStoreApi';
import ConfigStoreItemApi from './api/ConfigStoreItemApi';
import ContactApi from './api/ContactApi';
import ContentApi from './api/ContentApi';
import CustomerApi from './api/CustomerApi';
import CustomerAddressesApi from './api/CustomerAddressesApi';
import DdosProtectionApi from './api/DdosProtectionApi';
import DictionaryApi from './api/DictionaryApi';
import DictionaryInfoApi from './api/DictionaryInfoApi';
import DictionaryItemApi from './api/DictionaryItemApi';
import DiffApi from './api/DiffApi';
import DirectorApi from './api/DirectorApi';
import DirectorBackendApi from './api/DirectorBackendApi';
import DmDomainsApi from './api/DmDomainsApi';
import DomainApi from './api/DomainApi';
import DomainInspectorHistoricalApi from './api/DomainInspectorHistoricalApi';
import DomainInspectorRealtimeApi from './api/DomainInspectorRealtimeApi';
import DomainOwnershipsApi from './api/DomainOwnershipsApi';
import DomainResearchApi from './api/DomainResearchApi';
import EventsApi from './api/EventsApi';
import GzipApi from './api/GzipApi';
import HeaderApi from './api/HeaderApi';
import HealthcheckApi from './api/HealthcheckApi';
import HistoricalApi from './api/HistoricalApi';
import Http3Api from './api/Http3Api';
import IamPermissionsApi from './api/IamPermissionsApi';
import IamRolesApi from './api/IamRolesApi';
import IamServiceGroupsApi from './api/IamServiceGroupsApi';
import IamUserGroupsApi from './api/IamUserGroupsApi';
import ImageOptimizerDefaultSettingsApi from './api/ImageOptimizerDefaultSettingsApi';
import InsightsApi from './api/InsightsApi';
import InvitationsApi from './api/InvitationsApi';
import KvStoreApi from './api/KvStoreApi';
import KvStoreItemApi from './api/KvStoreItemApi';
import LogExplorerApi from './api/LogExplorerApi';
import LoggingAzureblobApi from './api/LoggingAzureblobApi';
import LoggingBigqueryApi from './api/LoggingBigqueryApi';
import LoggingCloudfilesApi from './api/LoggingCloudfilesApi';
import LoggingDatadogApi from './api/LoggingDatadogApi';
import LoggingDigitaloceanApi from './api/LoggingDigitaloceanApi';
import LoggingElasticsearchApi from './api/LoggingElasticsearchApi';
import LoggingFtpApi from './api/LoggingFtpApi';
import LoggingGcsApi from './api/LoggingGcsApi';
import LoggingGrafanacloudlogsApi from './api/LoggingGrafanacloudlogsApi';
import LoggingHerokuApi from './api/LoggingHerokuApi';
import LoggingHoneycombApi from './api/LoggingHoneycombApi';
import LoggingHttpsApi from './api/LoggingHttpsApi';
import LoggingKafkaApi from './api/LoggingKafkaApi';
import LoggingKinesisApi from './api/LoggingKinesisApi';
import LoggingLogentriesApi from './api/LoggingLogentriesApi';
import LoggingLogglyApi from './api/LoggingLogglyApi';
import LoggingLogshuttleApi from './api/LoggingLogshuttleApi';
import LoggingNewrelicApi from './api/LoggingNewrelicApi';
import LoggingNewrelicotlpApi from './api/LoggingNewrelicotlpApi';
import LoggingOpenstackApi from './api/LoggingOpenstackApi';
import LoggingPapertrailApi from './api/LoggingPapertrailApi';
import LoggingPubsubApi from './api/LoggingPubsubApi';
import LoggingS3Api from './api/LoggingS3Api';
import LoggingScalyrApi from './api/LoggingScalyrApi';
import LoggingSftpApi from './api/LoggingSftpApi';
import LoggingSplunkApi from './api/LoggingSplunkApi';
import LoggingSumologicApi from './api/LoggingSumologicApi';
import LoggingSyslogApi from './api/LoggingSyslogApi';
import MetricsPlatformApi from './api/MetricsPlatformApi';
import MutualAuthenticationApi from './api/MutualAuthenticationApi';
import NgwafReportsApi from './api/NgwafReportsApi';
import ObjectStorageAccessKeysApi from './api/ObjectStorageAccessKeysApi';
import ObservabilityAggregationsForLogsApi from './api/ObservabilityAggregationsForLogsApi';
import ObservabilityCustomDashboardsApi from './api/ObservabilityCustomDashboardsApi';
import ObservabilityTimeseriesApi from './api/ObservabilityTimeseriesApi';
import OriginInspectorHistoricalApi from './api/OriginInspectorHistoricalApi';
import OriginInspectorRealtimeApi from './api/OriginInspectorRealtimeApi';
import PackageApi from './api/PackageApi';
import PoolApi from './api/PoolApi';
import PopApi from './api/PopApi';
import ProductAiAcceleratorApi from './api/ProductAiAcceleratorApi';
import ProductApiDiscoveryApi from './api/ProductApiDiscoveryApi';
import ProductBotManagementApi from './api/ProductBotManagementApi';
import ProductBrotliCompressionApi from './api/ProductBrotliCompressionApi';
import ProductDdosProtectionApi from './api/ProductDdosProtectionApi';
import ProductDomainInspectorApi from './api/ProductDomainInspectorApi';
import ProductDomainResearchApi from './api/ProductDomainResearchApi';
import ProductFanoutApi from './api/ProductFanoutApi';
import ProductImageOptimizerApi from './api/ProductImageOptimizerApi';
import ProductLogExplorerInsightsApi from './api/ProductLogExplorerInsightsApi';
import ProductNgwafApi from './api/ProductNgwafApi';
import ProductObjectStorageApi from './api/ProductObjectStorageApi';
import ProductOriginInspectorApi from './api/ProductOriginInspectorApi';
import ProductWebsocketsApi from './api/ProductWebsocketsApi';
import PublicIpListApi from './api/PublicIpListApi';
import PublishApi from './api/PublishApi';
import PurgeApi from './api/PurgeApi';
import RateLimiterApi from './api/RateLimiterApi';
import RealtimeApi from './api/RealtimeApi';
import RequestSettingsApi from './api/RequestSettingsApi';
import ResourceApi from './api/ResourceApi';
import ResponseObjectApi from './api/ResponseObjectApi';
import SecretStoreApi from './api/SecretStoreApi';
import SecretStoreItemApi from './api/SecretStoreItemApi';
import ServerApi from './api/ServerApi';
import ServiceApi from './api/ServiceApi';
import ServiceAuthorizationsApi from './api/ServiceAuthorizationsApi';
import SettingsApi from './api/SettingsApi';
import SnippetApi from './api/SnippetApi';
import StarApi from './api/StarApi';
import StatsApi from './api/StatsApi';
import SudoApi from './api/SudoApi';
import TlsActivationsApi from './api/TlsActivationsApi';
import TlsBulkCertificatesApi from './api/TlsBulkCertificatesApi';
import TlsCertificatesApi from './api/TlsCertificatesApi';
import TlsConfigurationsApi from './api/TlsConfigurationsApi';
import TlsCsrsApi from './api/TlsCsrsApi';
import TlsDomainsApi from './api/TlsDomainsApi';
import TlsPrivateKeysApi from './api/TlsPrivateKeysApi';
import TlsSubscriptionsApi from './api/TlsSubscriptionsApi';
import TokensApi from './api/TokensApi';
import UserApi from './api/UserApi';
import VclApi from './api/VclApi';
import VclDiffApi from './api/VclDiffApi';
import VersionApi from './api/VersionApi';
import WholePlatformDdosHistoricalApi from './api/WholePlatformDdosHistoricalApi';


function authenticate (key) {
    ApiClient.instance.authenticate(key);
}

/**
* A JavaScript client library for interacting with most facets of the Fastly API..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Fastly = require('index'); // See note below*.
* var xxxSvc = new Fastly.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Fastly.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Fastly.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Fastly.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 15.0.0-beta.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AccessKey model constructor.
     * @property {module:model/AccessKey}
     */
    AccessKey,

    /**
     * The AccessKeyResponse model constructor.
     * @property {module:model/AccessKeyResponse}
     */
    AccessKeyResponse,

    /**
     * The Acl model constructor.
     * @property {module:model/Acl}
     */
    Acl,

    /**
     * The AclEntry model constructor.
     * @property {module:model/AclEntry}
     */
    AclEntry,

    /**
     * The AclEntryResponse model constructor.
     * @property {module:model/AclEntryResponse}
     */
    AclEntryResponse,

    /**
     * The AclEntryResponseAllOf model constructor.
     * @property {module:model/AclEntryResponseAllOf}
     */
    AclEntryResponseAllOf,

    /**
     * The AclResponse model constructor.
     * @property {module:model/AclResponse}
     */
    AclResponse,

    /**
     * The AclResponseAllOf model constructor.
     * @property {module:model/AclResponseAllOf}
     */
    AclResponseAllOf,

    /**
     * The AiAcceleratorResponseBodyEnable model constructor.
     * @property {module:model/AiAcceleratorResponseBodyEnable}
     */
    AiAcceleratorResponseBodyEnable,

    /**
     * The AiAcceleratorResponseCustomer model constructor.
     * @property {module:model/AiAcceleratorResponseCustomer}
     */
    AiAcceleratorResponseCustomer,

    /**
     * The AiAcceleratorResponseCustomerCustomer model constructor.
     * @property {module:model/AiAcceleratorResponseCustomerCustomer}
     */
    AiAcceleratorResponseCustomerCustomer,

    /**
     * The AiAcceleratorResponseLinks model constructor.
     * @property {module:model/AiAcceleratorResponseLinks}
     */
    AiAcceleratorResponseLinks,

    /**
     * The AiAcceleratorResponseLinksLinks model constructor.
     * @property {module:model/AiAcceleratorResponseLinksLinks}
     */
    AiAcceleratorResponseLinksLinks,

    /**
     * The AiAcceleratorResponseProduct model constructor.
     * @property {module:model/AiAcceleratorResponseProduct}
     */
    AiAcceleratorResponseProduct,

    /**
     * The AiAcceleratorResponseProductProduct model constructor.
     * @property {module:model/AiAcceleratorResponseProductProduct}
     */
    AiAcceleratorResponseProductProduct,

    /**
     * The ApexRedirect model constructor.
     * @property {module:model/ApexRedirect}
     */
    ApexRedirect,

    /**
     * The ApexRedirectAllOf model constructor.
     * @property {module:model/ApexRedirectAllOf}
     */
    ApexRedirectAllOf,

    /**
     * The ApiDiscoveryResponseBodyGetAllServices model constructor.
     * @property {module:model/ApiDiscoveryResponseBodyGetAllServices}
     */
    ApiDiscoveryResponseBodyGetAllServices,

    /**
     * The ApiDiscoveryResponseCustomer model constructor.
     * @property {module:model/ApiDiscoveryResponseCustomer}
     */
    ApiDiscoveryResponseCustomer,

    /**
     * The ApiDiscoveryResponseCustomerCustomer model constructor.
     * @property {module:model/ApiDiscoveryResponseCustomerCustomer}
     */
    ApiDiscoveryResponseCustomerCustomer,

    /**
     * The ApiDiscoveryResponseEnable model constructor.
     * @property {module:model/ApiDiscoveryResponseEnable}
     */
    ApiDiscoveryResponseEnable,

    /**
     * The ApiDiscoveryResponseEnabledServices model constructor.
     * @property {module:model/ApiDiscoveryResponseEnabledServices}
     */
    ApiDiscoveryResponseEnabledServices,

    /**
     * The ApiDiscoveryResponseLinks model constructor.
     * @property {module:model/ApiDiscoveryResponseLinks}
     */
    ApiDiscoveryResponseLinks,

    /**
     * The ApiDiscoveryResponseLinksGetAllServices model constructor.
     * @property {module:model/ApiDiscoveryResponseLinksGetAllServices}
     */
    ApiDiscoveryResponseLinksGetAllServices,

    /**
     * The ApiDiscoveryResponseLinksGetAllServicesLinks model constructor.
     * @property {module:model/ApiDiscoveryResponseLinksGetAllServicesLinks}
     */
    ApiDiscoveryResponseLinksGetAllServicesLinks,

    /**
     * The ApiDiscoveryResponseLinksLinks model constructor.
     * @property {module:model/ApiDiscoveryResponseLinksLinks}
     */
    ApiDiscoveryResponseLinksLinks,

    /**
     * The ApiDiscoveryResponseProduct model constructor.
     * @property {module:model/ApiDiscoveryResponseProduct}
     */
    ApiDiscoveryResponseProduct,

    /**
     * The ApiDiscoveryResponseProductProduct model constructor.
     * @property {module:model/ApiDiscoveryResponseProductProduct}
     */
    ApiDiscoveryResponseProductProduct,

    /**
     * The ApiDiscoveryResponseService model constructor.
     * @property {module:model/ApiDiscoveryResponseService}
     */
    ApiDiscoveryResponseService,

    /**
     * The ApiDiscoveryResponseServiceService model constructor.
     * @property {module:model/ApiDiscoveryResponseServiceService}
     */
    ApiDiscoveryResponseServiceService,

    /**
     * The AsyncResponse model constructor.
     * @property {module:model/AsyncResponse}
     */
    AsyncResponse,

    /**
     * The AttackReport model constructor.
     * @property {module:model/AttackReport}
     */
    AttackReport,

    /**
     * The AttackSignal model constructor.
     * @property {module:model/AttackSignal}
     */
    AttackSignal,

    /**
     * The AttackSource model constructor.
     * @property {module:model/AttackSource}
     */
    AttackSource,

    /**
     * The AutomationToken model constructor.
     * @property {module:model/AutomationToken}
     */
    AutomationToken,

    /**
     * The AutomationTokenCreateRequest model constructor.
     * @property {module:model/AutomationTokenCreateRequest}
     */
    AutomationTokenCreateRequest,

    /**
     * The AutomationTokenCreateRequestAttributes model constructor.
     * @property {module:model/AutomationTokenCreateRequestAttributes}
     */
    AutomationTokenCreateRequestAttributes,

    /**
     * The AutomationTokenCreateResponse model constructor.
     * @property {module:model/AutomationTokenCreateResponse}
     */
    AutomationTokenCreateResponse,

    /**
     * The AutomationTokenCreateResponseAllOf model constructor.
     * @property {module:model/AutomationTokenCreateResponseAllOf}
     */
    AutomationTokenCreateResponseAllOf,

    /**
     * The AutomationTokenErrorResponse model constructor.
     * @property {module:model/AutomationTokenErrorResponse}
     */
    AutomationTokenErrorResponse,

    /**
     * The AutomationTokenResponse model constructor.
     * @property {module:model/AutomationTokenResponse}
     */
    AutomationTokenResponse,

    /**
     * The AutomationTokenResponseAllOf model constructor.
     * @property {module:model/AutomationTokenResponseAllOf}
     */
    AutomationTokenResponseAllOf,

    /**
     * The AwsRegion model constructor.
     * @property {module:model/AwsRegion}
     */
    AwsRegion,

    /**
     * The Backend model constructor.
     * @property {module:model/Backend}
     */
    Backend,

    /**
     * The BackendResponse model constructor.
     * @property {module:model/BackendResponse}
     */
    BackendResponse,

    /**
     * The BackendResponseAllOf model constructor.
     * @property {module:model/BackendResponseAllOf}
     */
    BackendResponseAllOf,

    /**
     * The BillingAddressAttributes model constructor.
     * @property {module:model/BillingAddressAttributes}
     */
    BillingAddressAttributes,

    /**
     * The BillingAddressRequest model constructor.
     * @property {module:model/BillingAddressRequest}
     */
    BillingAddressRequest,

    /**
     * The BillingAddressRequestData model constructor.
     * @property {module:model/BillingAddressRequestData}
     */
    BillingAddressRequestData,

    /**
     * The BillingAddressResponse model constructor.
     * @property {module:model/BillingAddressResponse}
     */
    BillingAddressResponse,

    /**
     * The BillingAddressResponseData model constructor.
     * @property {module:model/BillingAddressResponseData}
     */
    BillingAddressResponseData,

    /**
     * The BillingAddressVerificationErrorResponse model constructor.
     * @property {module:model/BillingAddressVerificationErrorResponse}
     */
    BillingAddressVerificationErrorResponse,

    /**
     * The BillingAddressVerificationErrorResponseErrors model constructor.
     * @property {module:model/BillingAddressVerificationErrorResponseErrors}
     */
    BillingAddressVerificationErrorResponseErrors,

    /**
     * The BotManagementResponseBodyEnable model constructor.
     * @property {module:model/BotManagementResponseBodyEnable}
     */
    BotManagementResponseBodyEnable,

    /**
     * The BotManagementResponseBodyGetAllServices model constructor.
     * @property {module:model/BotManagementResponseBodyGetAllServices}
     */
    BotManagementResponseBodyGetAllServices,

    /**
     * The BotManagementResponseCustomer model constructor.
     * @property {module:model/BotManagementResponseCustomer}
     */
    BotManagementResponseCustomer,

    /**
     * The BotManagementResponseCustomerCustomer model constructor.
     * @property {module:model/BotManagementResponseCustomerCustomer}
     */
    BotManagementResponseCustomerCustomer,

    /**
     * The BotManagementResponseEnabledServices model constructor.
     * @property {module:model/BotManagementResponseEnabledServices}
     */
    BotManagementResponseEnabledServices,

    /**
     * The BotManagementResponseLinks model constructor.
     * @property {module:model/BotManagementResponseLinks}
     */
    BotManagementResponseLinks,

    /**
     * The BotManagementResponseLinksGetAllServices model constructor.
     * @property {module:model/BotManagementResponseLinksGetAllServices}
     */
    BotManagementResponseLinksGetAllServices,

    /**
     * The BotManagementResponseLinksGetAllServicesLinks model constructor.
     * @property {module:model/BotManagementResponseLinksGetAllServicesLinks}
     */
    BotManagementResponseLinksGetAllServicesLinks,

    /**
     * The BotManagementResponseLinksLinks model constructor.
     * @property {module:model/BotManagementResponseLinksLinks}
     */
    BotManagementResponseLinksLinks,

    /**
     * The BotManagementResponseProduct model constructor.
     * @property {module:model/BotManagementResponseProduct}
     */
    BotManagementResponseProduct,

    /**
     * The BotManagementResponseProductProduct model constructor.
     * @property {module:model/BotManagementResponseProductProduct}
     */
    BotManagementResponseProductProduct,

    /**
     * The BotManagementResponseService model constructor.
     * @property {module:model/BotManagementResponseService}
     */
    BotManagementResponseService,

    /**
     * The BrotliCompressionResponseBodyEnable model constructor.
     * @property {module:model/BrotliCompressionResponseBodyEnable}
     */
    BrotliCompressionResponseBodyEnable,

    /**
     * The BrotliCompressionResponseBodyGetAllServices model constructor.
     * @property {module:model/BrotliCompressionResponseBodyGetAllServices}
     */
    BrotliCompressionResponseBodyGetAllServices,

    /**
     * The BrotliCompressionResponseCustomer model constructor.
     * @property {module:model/BrotliCompressionResponseCustomer}
     */
    BrotliCompressionResponseCustomer,

    /**
     * The BrotliCompressionResponseEnabledServices model constructor.
     * @property {module:model/BrotliCompressionResponseEnabledServices}
     */
    BrotliCompressionResponseEnabledServices,

    /**
     * The BrotliCompressionResponseLinks model constructor.
     * @property {module:model/BrotliCompressionResponseLinks}
     */
    BrotliCompressionResponseLinks,

    /**
     * The BrotliCompressionResponseLinksGetAllServices model constructor.
     * @property {module:model/BrotliCompressionResponseLinksGetAllServices}
     */
    BrotliCompressionResponseLinksGetAllServices,

    /**
     * The BrotliCompressionResponseLinksGetAllServicesLinks model constructor.
     * @property {module:model/BrotliCompressionResponseLinksGetAllServicesLinks}
     */
    BrotliCompressionResponseLinksGetAllServicesLinks,

    /**
     * The BrotliCompressionResponseLinksLinks model constructor.
     * @property {module:model/BrotliCompressionResponseLinksLinks}
     */
    BrotliCompressionResponseLinksLinks,

    /**
     * The BrotliCompressionResponseProduct model constructor.
     * @property {module:model/BrotliCompressionResponseProduct}
     */
    BrotliCompressionResponseProduct,

    /**
     * The BrotliCompressionResponseProductProduct model constructor.
     * @property {module:model/BrotliCompressionResponseProductProduct}
     */
    BrotliCompressionResponseProductProduct,

    /**
     * The BrotliCompressionResponseService model constructor.
     * @property {module:model/BrotliCompressionResponseService}
     */
    BrotliCompressionResponseService,

    /**
     * The BulkUpdateAclEntriesRequest model constructor.
     * @property {module:model/BulkUpdateAclEntriesRequest}
     */
    BulkUpdateAclEntriesRequest,

    /**
     * The BulkUpdateAclEntry model constructor.
     * @property {module:model/BulkUpdateAclEntry}
     */
    BulkUpdateAclEntry,

    /**
     * The BulkUpdateAclEntryAllOf model constructor.
     * @property {module:model/BulkUpdateAclEntryAllOf}
     */
    BulkUpdateAclEntryAllOf,

    /**
     * The BulkUpdateConfigStoreItem model constructor.
     * @property {module:model/BulkUpdateConfigStoreItem}
     */
    BulkUpdateConfigStoreItem,

    /**
     * The BulkUpdateConfigStoreItemAllOf model constructor.
     * @property {module:model/BulkUpdateConfigStoreItemAllOf}
     */
    BulkUpdateConfigStoreItemAllOf,

    /**
     * The BulkUpdateConfigStoreListRequest model constructor.
     * @property {module:model/BulkUpdateConfigStoreListRequest}
     */
    BulkUpdateConfigStoreListRequest,

    /**
     * The BulkUpdateDictionaryItem model constructor.
     * @property {module:model/BulkUpdateDictionaryItem}
     */
    BulkUpdateDictionaryItem,

    /**
     * The BulkUpdateDictionaryListRequest model constructor.
     * @property {module:model/BulkUpdateDictionaryListRequest}
     */
    BulkUpdateDictionaryListRequest,

    /**
     * The CacheSetting model constructor.
     * @property {module:model/CacheSetting}
     */
    CacheSetting,

    /**
     * The CacheSettingResponse model constructor.
     * @property {module:model/CacheSettingResponse}
     */
    CacheSettingResponse,

    /**
     * The ClientKey model constructor.
     * @property {module:model/ClientKey}
     */
    ClientKey,

    /**
     * The ComputeAclCreateAclsRequest model constructor.
     * @property {module:model/ComputeAclCreateAclsRequest}
     */
    ComputeAclCreateAclsRequest,

    /**
     * The ComputeAclCreateAclsResponse model constructor.
     * @property {module:model/ComputeAclCreateAclsResponse}
     */
    ComputeAclCreateAclsResponse,

    /**
     * The ComputeAclList model constructor.
     * @property {module:model/ComputeAclList}
     */
    ComputeAclList,

    /**
     * The ComputeAclListEntries model constructor.
     * @property {module:model/ComputeAclListEntries}
     */
    ComputeAclListEntries,

    /**
     * The ComputeAclListEntriesItem model constructor.
     * @property {module:model/ComputeAclListEntriesItem}
     */
    ComputeAclListEntriesItem,

    /**
     * The ComputeAclListEntriesMeta model constructor.
     * @property {module:model/ComputeAclListEntriesMeta}
     */
    ComputeAclListEntriesMeta,

    /**
     * The ComputeAclListMeta model constructor.
     * @property {module:model/ComputeAclListMeta}
     */
    ComputeAclListMeta,

    /**
     * The ComputeAclLookup model constructor.
     * @property {module:model/ComputeAclLookup}
     */
    ComputeAclLookup,

    /**
     * The ComputeAclUpdate model constructor.
     * @property {module:model/ComputeAclUpdate}
     */
    ComputeAclUpdate,

    /**
     * The ComputeAclUpdateEntry model constructor.
     * @property {module:model/ComputeAclUpdateEntry}
     */
    ComputeAclUpdateEntry,

    /**
     * The Condition model constructor.
     * @property {module:model/Condition}
     */
    Condition,

    /**
     * The ConditionResponse model constructor.
     * @property {module:model/ConditionResponse}
     */
    ConditionResponse,

    /**
     * The ConfigStore model constructor.
     * @property {module:model/ConfigStore}
     */
    ConfigStore,

    /**
     * The ConfigStoreInfoResponse model constructor.
     * @property {module:model/ConfigStoreInfoResponse}
     */
    ConfigStoreInfoResponse,

    /**
     * The ConfigStoreItem model constructor.
     * @property {module:model/ConfigStoreItem}
     */
    ConfigStoreItem,

    /**
     * The ConfigStoreItemResponse model constructor.
     * @property {module:model/ConfigStoreItemResponse}
     */
    ConfigStoreItemResponse,

    /**
     * The ConfigStoreItemResponseAllOf model constructor.
     * @property {module:model/ConfigStoreItemResponseAllOf}
     */
    ConfigStoreItemResponseAllOf,

    /**
     * The ConfigStoreResponse model constructor.
     * @property {module:model/ConfigStoreResponse}
     */
    ConfigStoreResponse,

    /**
     * The ConfigStoreResponseAllOf model constructor.
     * @property {module:model/ConfigStoreResponseAllOf}
     */
    ConfigStoreResponseAllOf,

    /**
     * The Contact model constructor.
     * @property {module:model/Contact}
     */
    Contact,

    /**
     * The ContactResponse model constructor.
     * @property {module:model/ContactResponse}
     */
    ContactResponse,

    /**
     * The ContactResponseAllOf model constructor.
     * @property {module:model/ContactResponseAllOf}
     */
    ContactResponseAllOf,

    /**
     * The Content model constructor.
     * @property {module:model/Content}
     */
    Content,

    /**
     * The CreateDashboardRequest model constructor.
     * @property {module:model/CreateDashboardRequest}
     */
    CreateDashboardRequest,

    /**
     * The CreateResponseObjectRequest model constructor.
     * @property {module:model/CreateResponseObjectRequest}
     */
    CreateResponseObjectRequest,

    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer,

    /**
     * The CustomerAddress model constructor.
     * @property {module:model/CustomerAddress}
     */
    CustomerAddress,

    /**
     * The CustomerResponse model constructor.
     * @property {module:model/CustomerResponse}
     */
    CustomerResponse,

    /**
     * The CustomerResponseAllOf model constructor.
     * @property {module:model/CustomerResponseAllOf}
     */
    CustomerResponseAllOf,

    /**
     * The Dashboard model constructor.
     * @property {module:model/Dashboard}
     */
    Dashboard,

    /**
     * The DashboardItem model constructor.
     * @property {module:model/DashboardItem}
     */
    DashboardItem,

    /**
     * The DashboardItemPropertyDataSource model constructor.
     * @property {module:model/DashboardItemPropertyDataSource}
     */
    DashboardItemPropertyDataSource,

    /**
     * The DashboardItemPropertyDataSourcePropertyConfig model constructor.
     * @property {module:model/DashboardItemPropertyDataSourcePropertyConfig}
     */
    DashboardItemPropertyDataSourcePropertyConfig,

    /**
     * The DashboardItemPropertyVisualization model constructor.
     * @property {module:model/DashboardItemPropertyVisualization}
     */
    DashboardItemPropertyVisualization,

    /**
     * The DashboardItemPropertyVisualizationPropertyConfig model constructor.
     * @property {module:model/DashboardItemPropertyVisualizationPropertyConfig}
     */
    DashboardItemPropertyVisualizationPropertyConfig,

    /**
     * The DashboardPropertyCreatedBy model constructor.
     * @property {module:model/DashboardPropertyCreatedBy}
     */
    DashboardPropertyCreatedBy,

    /**
     * The DashboardPropertyUpdatedBy model constructor.
     * @property {module:model/DashboardPropertyUpdatedBy}
     */
    DashboardPropertyUpdatedBy,

    /**
     * The DdosProtectionAttributeStats model constructor.
     * @property {module:model/DdosProtectionAttributeStats}
     */
    DdosProtectionAttributeStats,

    /**
     * The DdosProtectionAttributeValue model constructor.
     * @property {module:model/DdosProtectionAttributeValue}
     */
    DdosProtectionAttributeValue,

    /**
     * The DdosProtectionError model constructor.
     * @property {module:model/DdosProtectionError}
     */
    DdosProtectionError,

    /**
     * The DdosProtectionErrorErrors model constructor.
     * @property {module:model/DdosProtectionErrorErrors}
     */
    DdosProtectionErrorErrors,

    /**
     * The DdosProtectionEvent model constructor.
     * @property {module:model/DdosProtectionEvent}
     */
    DdosProtectionEvent,

    /**
     * The DdosProtectionEventAllOf model constructor.
     * @property {module:model/DdosProtectionEventAllOf}
     */
    DdosProtectionEventAllOf,

    /**
     * The DdosProtectionInvalidRequest model constructor.
     * @property {module:model/DdosProtectionInvalidRequest}
     */
    DdosProtectionInvalidRequest,

    /**
     * The DdosProtectionNotAuthenticated model constructor.
     * @property {module:model/DdosProtectionNotAuthenticated}
     */
    DdosProtectionNotAuthenticated,

    /**
     * The DdosProtectionNotAuthorized model constructor.
     * @property {module:model/DdosProtectionNotAuthorized}
     */
    DdosProtectionNotAuthorized,

    /**
     * The DdosProtectionNotFound model constructor.
     * @property {module:model/DdosProtectionNotFound}
     */
    DdosProtectionNotFound,

    /**
     * The DdosProtectionRequestEnableMode model constructor.
     * @property {module:model/DdosProtectionRequestEnableMode}
     */
    DdosProtectionRequestEnableMode,

    /**
     * The DdosProtectionRequestUpdateConfiguration model constructor.
     * @property {module:model/DdosProtectionRequestUpdateConfiguration}
     */
    DdosProtectionRequestUpdateConfiguration,

    /**
     * The DdosProtectionResponseBodyGetAllServices model constructor.
     * @property {module:model/DdosProtectionResponseBodyGetAllServices}
     */
    DdosProtectionResponseBodyGetAllServices,

    /**
     * The DdosProtectionResponseConfiguration model constructor.
     * @property {module:model/DdosProtectionResponseConfiguration}
     */
    DdosProtectionResponseConfiguration,

    /**
     * The DdosProtectionResponseConfigurationConfiguration model constructor.
     * @property {module:model/DdosProtectionResponseConfigurationConfiguration}
     */
    DdosProtectionResponseConfigurationConfiguration,

    /**
     * The DdosProtectionResponseConfigure model constructor.
     * @property {module:model/DdosProtectionResponseConfigure}
     */
    DdosProtectionResponseConfigure,

    /**
     * The DdosProtectionResponseCustomer model constructor.
     * @property {module:model/DdosProtectionResponseCustomer}
     */
    DdosProtectionResponseCustomer,

    /**
     * The DdosProtectionResponseEnable model constructor.
     * @property {module:model/DdosProtectionResponseEnable}
     */
    DdosProtectionResponseEnable,

    /**
     * The DdosProtectionResponseEnabledServices model constructor.
     * @property {module:model/DdosProtectionResponseEnabledServices}
     */
    DdosProtectionResponseEnabledServices,

    /**
     * The DdosProtectionResponseLinks model constructor.
     * @property {module:model/DdosProtectionResponseLinks}
     */
    DdosProtectionResponseLinks,

    /**
     * The DdosProtectionResponseLinksGetAllServices model constructor.
     * @property {module:model/DdosProtectionResponseLinksGetAllServices}
     */
    DdosProtectionResponseLinksGetAllServices,

    /**
     * The DdosProtectionResponseLinksGetAllServicesLinks model constructor.
     * @property {module:model/DdosProtectionResponseLinksGetAllServicesLinks}
     */
    DdosProtectionResponseLinksGetAllServicesLinks,

    /**
     * The DdosProtectionResponseLinksLinks model constructor.
     * @property {module:model/DdosProtectionResponseLinksLinks}
     */
    DdosProtectionResponseLinksLinks,

    /**
     * The DdosProtectionResponseProduct model constructor.
     * @property {module:model/DdosProtectionResponseProduct}
     */
    DdosProtectionResponseProduct,

    /**
     * The DdosProtectionResponseProductProduct model constructor.
     * @property {module:model/DdosProtectionResponseProductProduct}
     */
    DdosProtectionResponseProductProduct,

    /**
     * The DdosProtectionResponseService model constructor.
     * @property {module:model/DdosProtectionResponseService}
     */
    DdosProtectionResponseService,

    /**
     * The DdosProtectionRule model constructor.
     * @property {module:model/DdosProtectionRule}
     */
    DdosProtectionRule,

    /**
     * The DdosProtectionRuleAllOf model constructor.
     * @property {module:model/DdosProtectionRuleAllOf}
     */
    DdosProtectionRuleAllOf,

    /**
     * The DdosProtectionRulePatch model constructor.
     * @property {module:model/DdosProtectionRulePatch}
     */
    DdosProtectionRulePatch,

    /**
     * The DdosProtectionRuleWithStats model constructor.
     * @property {module:model/DdosProtectionRuleWithStats}
     */
    DdosProtectionRuleWithStats,

    /**
     * The DdosProtectionRuleWithStatsAllOf model constructor.
     * @property {module:model/DdosProtectionRuleWithStatsAllOf}
     */
    DdosProtectionRuleWithStatsAllOf,

    /**
     * The DdosProtectionTrafficStats model constructor.
     * @property {module:model/DdosProtectionTrafficStats}
     */
    DdosProtectionTrafficStats,

    /**
     * The DdosProtectionTrafficStatsAllOf model constructor.
     * @property {module:model/DdosProtectionTrafficStatsAllOf}
     */
    DdosProtectionTrafficStatsAllOf,

    /**
     * The DefaultSettings model constructor.
     * @property {module:model/DefaultSettings}
     */
    DefaultSettings,

    /**
     * The DefaultSettingsError model constructor.
     * @property {module:model/DefaultSettingsError}
     */
    DefaultSettingsError,

    /**
     * The DefaultSettingsResponse model constructor.
     * @property {module:model/DefaultSettingsResponse}
     */
    DefaultSettingsResponse,

    /**
     * The Dictionary model constructor.
     * @property {module:model/Dictionary}
     */
    Dictionary,

    /**
     * The DictionaryInfoResponse model constructor.
     * @property {module:model/DictionaryInfoResponse}
     */
    DictionaryInfoResponse,

    /**
     * The DictionaryItem model constructor.
     * @property {module:model/DictionaryItem}
     */
    DictionaryItem,

    /**
     * The DictionaryItemResponse model constructor.
     * @property {module:model/DictionaryItemResponse}
     */
    DictionaryItemResponse,

    /**
     * The DictionaryItemResponseAllOf model constructor.
     * @property {module:model/DictionaryItemResponseAllOf}
     */
    DictionaryItemResponseAllOf,

    /**
     * The DictionaryResponse model constructor.
     * @property {module:model/DictionaryResponse}
     */
    DictionaryResponse,

    /**
     * The DictionaryResponseAllOf model constructor.
     * @property {module:model/DictionaryResponseAllOf}
     */
    DictionaryResponseAllOf,

    /**
     * The DiffResponse model constructor.
     * @property {module:model/DiffResponse}
     */
    DiffResponse,

    /**
     * The DimensionAttributesCountryStats model constructor.
     * @property {module:model/DimensionAttributesCountryStats}
     */
    DimensionAttributesCountryStats,

    /**
     * The DimensionAttributesRate model constructor.
     * @property {module:model/DimensionAttributesRate}
     */
    DimensionAttributesRate,

    /**
     * The DimensionBrowser model constructor.
     * @property {module:model/DimensionBrowser}
     */
    DimensionBrowser,

    /**
     * The DimensionContentType model constructor.
     * @property {module:model/DimensionContentType}
     */
    DimensionContentType,

    /**
     * The DimensionCountry model constructor.
     * @property {module:model/DimensionCountry}
     */
    DimensionCountry,

    /**
     * The DimensionDevice model constructor.
     * @property {module:model/DimensionDevice}
     */
    DimensionDevice,

    /**
     * The DimensionOs model constructor.
     * @property {module:model/DimensionOs}
     */
    DimensionOs,

    /**
     * The DimensionResponse model constructor.
     * @property {module:model/DimensionResponse}
     */
    DimensionResponse,

    /**
     * The DimensionStatusCode model constructor.
     * @property {module:model/DimensionStatusCode}
     */
    DimensionStatusCode,

    /**
     * The DimensionUrl model constructor.
     * @property {module:model/DimensionUrl}
     */
    DimensionUrl,

    /**
     * The Director model constructor.
     * @property {module:model/Director}
     */
    Director,

    /**
     * The DirectorBackend model constructor.
     * @property {module:model/DirectorBackend}
     */
    DirectorBackend,

    /**
     * The DirectorBackendAllOf model constructor.
     * @property {module:model/DirectorBackendAllOf}
     */
    DirectorBackendAllOf,

    /**
     * The DirectorResponse model constructor.
     * @property {module:model/DirectorResponse}
     */
    DirectorResponse,

    /**
     * The DiscoveredOperationBase model constructor.
     * @property {module:model/DiscoveredOperationBase}
     */
    DiscoveredOperationBase,

    /**
     * The DiscoveredOperationGet model constructor.
     * @property {module:model/DiscoveredOperationGet}
     */
    DiscoveredOperationGet,

    /**
     * The DiscoveredOperationGetExtra model constructor.
     * @property {module:model/DiscoveredOperationGetExtra}
     */
    DiscoveredOperationGetExtra,

    /**
     * The Domain model constructor.
     * @property {module:model/Domain}
     */
    Domain,

    /**
     * The DomainInspector model constructor.
     * @property {module:model/DomainInspector}
     */
    DomainInspector,

    /**
     * The DomainInspectorEntry model constructor.
     * @property {module:model/DomainInspectorEntry}
     */
    DomainInspectorEntry,

    /**
     * The DomainInspectorEntryDimensions model constructor.
     * @property {module:model/DomainInspectorEntryDimensions}
     */
    DomainInspectorEntryDimensions,

    /**
     * The DomainInspectorMeasurements model constructor.
     * @property {module:model/DomainInspectorMeasurements}
     */
    DomainInspectorMeasurements,

    /**
     * The DomainInspectorRealtimeEntry model constructor.
     * @property {module:model/DomainInspectorRealtimeEntry}
     */
    DomainInspectorRealtimeEntry,

    /**
     * The DomainInspectorResponseBodyEnable model constructor.
     * @property {module:model/DomainInspectorResponseBodyEnable}
     */
    DomainInspectorResponseBodyEnable,

    /**
     * The DomainInspectorResponseBodyGetAllServices model constructor.
     * @property {module:model/DomainInspectorResponseBodyGetAllServices}
     */
    DomainInspectorResponseBodyGetAllServices,

    /**
     * The DomainInspectorResponseCustomer model constructor.
     * @property {module:model/DomainInspectorResponseCustomer}
     */
    DomainInspectorResponseCustomer,

    /**
     * The DomainInspectorResponseEnabledServices model constructor.
     * @property {module:model/DomainInspectorResponseEnabledServices}
     */
    DomainInspectorResponseEnabledServices,

    /**
     * The DomainInspectorResponseLinks model constructor.
     * @property {module:model/DomainInspectorResponseLinks}
     */
    DomainInspectorResponseLinks,

    /**
     * The DomainInspectorResponseLinksGetAllServices model constructor.
     * @property {module:model/DomainInspectorResponseLinksGetAllServices}
     */
    DomainInspectorResponseLinksGetAllServices,

    /**
     * The DomainInspectorResponseLinksGetAllServicesLinks model constructor.
     * @property {module:model/DomainInspectorResponseLinksGetAllServicesLinks}
     */
    DomainInspectorResponseLinksGetAllServicesLinks,

    /**
     * The DomainInspectorResponseLinksLinks model constructor.
     * @property {module:model/DomainInspectorResponseLinksLinks}
     */
    DomainInspectorResponseLinksLinks,

    /**
     * The DomainInspectorResponseProduct model constructor.
     * @property {module:model/DomainInspectorResponseProduct}
     */
    DomainInspectorResponseProduct,

    /**
     * The DomainInspectorResponseProductProduct model constructor.
     * @property {module:model/DomainInspectorResponseProductProduct}
     */
    DomainInspectorResponseProductProduct,

    /**
     * The DomainInspectorResponseService model constructor.
     * @property {module:model/DomainInspectorResponseService}
     */
    DomainInspectorResponseService,

    /**
     * The DomainResearchResponseBodyEnable model constructor.
     * @property {module:model/DomainResearchResponseBodyEnable}
     */
    DomainResearchResponseBodyEnable,

    /**
     * The DomainResearchResponseCustomer model constructor.
     * @property {module:model/DomainResearchResponseCustomer}
     */
    DomainResearchResponseCustomer,

    /**
     * The DomainResearchResponseLinks model constructor.
     * @property {module:model/DomainResearchResponseLinks}
     */
    DomainResearchResponseLinks,

    /**
     * The DomainResearchResponseLinksLinks model constructor.
     * @property {module:model/DomainResearchResponseLinksLinks}
     */
    DomainResearchResponseLinksLinks,

    /**
     * The DomainResearchResponseProduct model constructor.
     * @property {module:model/DomainResearchResponseProduct}
     */
    DomainResearchResponseProduct,

    /**
     * The DomainResearchResponseProductProduct model constructor.
     * @property {module:model/DomainResearchResponseProductProduct}
     */
    DomainResearchResponseProductProduct,

    /**
     * The DomainResponse model constructor.
     * @property {module:model/DomainResponse}
     */
    DomainResponse,

    /**
     * The Environment model constructor.
     * @property {module:model/Environment}
     */
    Environment,

    /**
     * The EnvironmentName model constructor.
     * @property {module:model/EnvironmentName}
     */
    EnvironmentName,

    /**
     * The EomInvoiceResponse model constructor.
     * @property {module:model/EomInvoiceResponse}
     */
    EomInvoiceResponse,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The ErrorResponseData model constructor.
     * @property {module:model/ErrorResponseData}
     */
    ErrorResponseData,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The EventAttributes model constructor.
     * @property {module:model/EventAttributes}
     */
    EventAttributes,

    /**
     * The EventData model constructor.
     * @property {module:model/EventData}
     */
    EventData,

    /**
     * The EventResponse model constructor.
     * @property {module:model/EventResponse}
     */
    EventResponse,

    /**
     * The EventsResponse model constructor.
     * @property {module:model/EventsResponse}
     */
    EventsResponse,

    /**
     * The FanoutResponseBodyEnable model constructor.
     * @property {module:model/FanoutResponseBodyEnable}
     */
    FanoutResponseBodyEnable,

    /**
     * The FanoutResponseBodyGetAllServices model constructor.
     * @property {module:model/FanoutResponseBodyGetAllServices}
     */
    FanoutResponseBodyGetAllServices,

    /**
     * The FanoutResponseCustomer model constructor.
     * @property {module:model/FanoutResponseCustomer}
     */
    FanoutResponseCustomer,

    /**
     * The FanoutResponseEnabledServices model constructor.
     * @property {module:model/FanoutResponseEnabledServices}
     */
    FanoutResponseEnabledServices,

    /**
     * The FanoutResponseLinks model constructor.
     * @property {module:model/FanoutResponseLinks}
     */
    FanoutResponseLinks,

    /**
     * The FanoutResponseLinksGetAllServices model constructor.
     * @property {module:model/FanoutResponseLinksGetAllServices}
     */
    FanoutResponseLinksGetAllServices,

    /**
     * The FanoutResponseLinksGetAllServicesLinks model constructor.
     * @property {module:model/FanoutResponseLinksGetAllServicesLinks}
     */
    FanoutResponseLinksGetAllServicesLinks,

    /**
     * The FanoutResponseLinksLinks model constructor.
     * @property {module:model/FanoutResponseLinksLinks}
     */
    FanoutResponseLinksLinks,

    /**
     * The FanoutResponseProduct model constructor.
     * @property {module:model/FanoutResponseProduct}
     */
    FanoutResponseProduct,

    /**
     * The FanoutResponseProductProduct model constructor.
     * @property {module:model/FanoutResponseProductProduct}
     */
    FanoutResponseProductProduct,

    /**
     * The FanoutResponseService model constructor.
     * @property {module:model/FanoutResponseService}
     */
    FanoutResponseService,

    /**
     * The FilterFieldItem model constructor.
     * @property {module:model/FilterFieldItem}
     */
    FilterFieldItem,

    /**
     * The GenericTokenError model constructor.
     * @property {module:model/GenericTokenError}
     */
    GenericTokenError,

    /**
     * The GetLogInsightsResponse model constructor.
     * @property {module:model/GetLogInsightsResponse}
     */
    GetLogInsightsResponse,

    /**
     * The GetLogRecordsResponse model constructor.
     * @property {module:model/GetLogRecordsResponse}
     */
    GetLogRecordsResponse,

    /**
     * The GetLogRecordsResponseMeta model constructor.
     * @property {module:model/GetLogRecordsResponseMeta}
     */
    GetLogRecordsResponseMeta,

    /**
     * The GetLogRecordsResponseMetaFilters model constructor.
     * @property {module:model/GetLogRecordsResponseMetaFilters}
     */
    GetLogRecordsResponseMetaFilters,

    /**
     * The GetServiceLevelUsageResponse model constructor.
     * @property {module:model/GetServiceLevelUsageResponse}
     */
    GetServiceLevelUsageResponse,

    /**
     * The GetServiceLevelUsageTypesResponse model constructor.
     * @property {module:model/GetServiceLevelUsageTypesResponse}
     */
    GetServiceLevelUsageTypesResponse,

    /**
     * The Gzip model constructor.
     * @property {module:model/Gzip}
     */
    Gzip,

    /**
     * The GzipResponse model constructor.
     * @property {module:model/GzipResponse}
     */
    GzipResponse,

    /**
     * The Header model constructor.
     * @property {module:model/Header}
     */
    Header,

    /**
     * The HeaderResponse model constructor.
     * @property {module:model/HeaderResponse}
     */
    HeaderResponse,

    /**
     * The Healthcheck model constructor.
     * @property {module:model/Healthcheck}
     */
    Healthcheck,

    /**
     * The HealthcheckResponse model constructor.
     * @property {module:model/HealthcheckResponse}
     */
    HealthcheckResponse,

    /**
     * The Historical model constructor.
     * @property {module:model/Historical}
     */
    Historical,

    /**
     * The HistoricalDdos model constructor.
     * @property {module:model/HistoricalDdos}
     */
    HistoricalDdos,

    /**
     * The HistoricalDdosMeta model constructor.
     * @property {module:model/HistoricalDdosMeta}
     */
    HistoricalDdosMeta,

    /**
     * The HistoricalDomains model constructor.
     * @property {module:model/HistoricalDomains}
     */
    HistoricalDomains,

    /**
     * The HistoricalDomainsData model constructor.
     * @property {module:model/HistoricalDomainsData}
     */
    HistoricalDomainsData,

    /**
     * The HistoricalDomainsMeta model constructor.
     * @property {module:model/HistoricalDomainsMeta}
     */
    HistoricalDomainsMeta,

    /**
     * The HistoricalDomainsMetaFilters model constructor.
     * @property {module:model/HistoricalDomainsMetaFilters}
     */
    HistoricalDomainsMetaFilters,

    /**
     * The HistoricalDomainsResponse model constructor.
     * @property {module:model/HistoricalDomainsResponse}
     */
    HistoricalDomainsResponse,

    /**
     * The HistoricalDomainsResponseAllOf model constructor.
     * @property {module:model/HistoricalDomainsResponseAllOf}
     */
    HistoricalDomainsResponseAllOf,

    /**
     * The HistoricalMeta model constructor.
     * @property {module:model/HistoricalMeta}
     */
    HistoricalMeta,

    /**
     * The HistoricalOriginsResponse model constructor.
     * @property {module:model/HistoricalOriginsResponse}
     */
    HistoricalOriginsResponse,

    /**
     * The HistoricalOriginsResponseAllOf model constructor.
     * @property {module:model/HistoricalOriginsResponseAllOf}
     */
    HistoricalOriginsResponseAllOf,

    /**
     * The HistoricalRegionsResponse model constructor.
     * @property {module:model/HistoricalRegionsResponse}
     */
    HistoricalRegionsResponse,

    /**
     * The HistoricalRegionsResponseAllOf model constructor.
     * @property {module:model/HistoricalRegionsResponseAllOf}
     */
    HistoricalRegionsResponseAllOf,

    /**
     * The HistoricalStatsAggregatedResponse model constructor.
     * @property {module:model/HistoricalStatsAggregatedResponse}
     */
    HistoricalStatsAggregatedResponse,

    /**
     * The HistoricalStatsAggregatedResponseAllOf model constructor.
     * @property {module:model/HistoricalStatsAggregatedResponseAllOf}
     */
    HistoricalStatsAggregatedResponseAllOf,

    /**
     * The HistoricalStatsByServiceResponse model constructor.
     * @property {module:model/HistoricalStatsByServiceResponse}
     */
    HistoricalStatsByServiceResponse,

    /**
     * The HistoricalStatsByServiceResponseAllOf model constructor.
     * @property {module:model/HistoricalStatsByServiceResponseAllOf}
     */
    HistoricalStatsByServiceResponseAllOf,

    /**
     * The HistoricalUsageAggregatedResponse model constructor.
     * @property {module:model/HistoricalUsageAggregatedResponse}
     */
    HistoricalUsageAggregatedResponse,

    /**
     * The HistoricalUsageAggregatedResponseAllOf model constructor.
     * @property {module:model/HistoricalUsageAggregatedResponseAllOf}
     */
    HistoricalUsageAggregatedResponseAllOf,

    /**
     * The HistoricalUsageData model constructor.
     * @property {module:model/HistoricalUsageData}
     */
    HistoricalUsageData,

    /**
     * The HistoricalUsageMonthResponse model constructor.
     * @property {module:model/HistoricalUsageMonthResponse}
     */
    HistoricalUsageMonthResponse,

    /**
     * The HistoricalUsageMonthResponseAllOf model constructor.
     * @property {module:model/HistoricalUsageMonthResponseAllOf}
     */
    HistoricalUsageMonthResponseAllOf,

    /**
     * The HistoricalUsageMonthResponseData model constructor.
     * @property {module:model/HistoricalUsageMonthResponseData}
     */
    HistoricalUsageMonthResponseData,

    /**
     * The HistoricalUsageService model constructor.
     * @property {module:model/HistoricalUsageService}
     */
    HistoricalUsageService,

    /**
     * The HistoricalUsageServiceResponse model constructor.
     * @property {module:model/HistoricalUsageServiceResponse}
     */
    HistoricalUsageServiceResponse,

    /**
     * The HistoricalUsageServiceResponseAllOf model constructor.
     * @property {module:model/HistoricalUsageServiceResponseAllOf}
     */
    HistoricalUsageServiceResponseAllOf,

    /**
     * The Http3 model constructor.
     * @property {module:model/Http3}
     */
    Http3,

    /**
     * The Http3AllOf model constructor.
     * @property {module:model/Http3AllOf}
     */
    Http3AllOf,

    /**
     * The HttpResponseFormat model constructor.
     * @property {module:model/HttpResponseFormat}
     */
    HttpResponseFormat,

    /**
     * The HttpStreamFormat model constructor.
     * @property {module:model/HttpStreamFormat}
     */
    HttpStreamFormat,

    /**
     * The IamPermission model constructor.
     * @property {module:model/IamPermission}
     */
    IamPermission,

    /**
     * The IamServiceGroup model constructor.
     * @property {module:model/IamServiceGroup}
     */
    IamServiceGroup,

    /**
     * The IamServiceGroupAllOf model constructor.
     * @property {module:model/IamServiceGroupAllOf}
     */
    IamServiceGroupAllOf,

    /**
     * The IamUserGroup model constructor.
     * @property {module:model/IamUserGroup}
     */
    IamUserGroup,

    /**
     * The IamUserGroupAllOf model constructor.
     * @property {module:model/IamUserGroupAllOf}
     */
    IamUserGroupAllOf,

    /**
     * The IamV1RoleListResponse model constructor.
     * @property {module:model/IamV1RoleListResponse}
     */
    IamV1RoleListResponse,

    /**
     * The IamV1RoleResponse model constructor.
     * @property {module:model/IamV1RoleResponse}
     */
    IamV1RoleResponse,

    /**
     * The ImageOptimizerResponseBodyEnable model constructor.
     * @property {module:model/ImageOptimizerResponseBodyEnable}
     */
    ImageOptimizerResponseBodyEnable,

    /**
     * The ImageOptimizerResponseBodyGetAllServices model constructor.
     * @property {module:model/ImageOptimizerResponseBodyGetAllServices}
     */
    ImageOptimizerResponseBodyGetAllServices,

    /**
     * The ImageOptimizerResponseCustomer model constructor.
     * @property {module:model/ImageOptimizerResponseCustomer}
     */
    ImageOptimizerResponseCustomer,

    /**
     * The ImageOptimizerResponseEnabledServices model constructor.
     * @property {module:model/ImageOptimizerResponseEnabledServices}
     */
    ImageOptimizerResponseEnabledServices,

    /**
     * The ImageOptimizerResponseLinks model constructor.
     * @property {module:model/ImageOptimizerResponseLinks}
     */
    ImageOptimizerResponseLinks,

    /**
     * The ImageOptimizerResponseLinksGetAllServices model constructor.
     * @property {module:model/ImageOptimizerResponseLinksGetAllServices}
     */
    ImageOptimizerResponseLinksGetAllServices,

    /**
     * The ImageOptimizerResponseLinksGetAllServicesLinks model constructor.
     * @property {module:model/ImageOptimizerResponseLinksGetAllServicesLinks}
     */
    ImageOptimizerResponseLinksGetAllServicesLinks,

    /**
     * The ImageOptimizerResponseLinksLinks model constructor.
     * @property {module:model/ImageOptimizerResponseLinksLinks}
     */
    ImageOptimizerResponseLinksLinks,

    /**
     * The ImageOptimizerResponseProduct model constructor.
     * @property {module:model/ImageOptimizerResponseProduct}
     */
    ImageOptimizerResponseProduct,

    /**
     * The ImageOptimizerResponseProductProduct model constructor.
     * @property {module:model/ImageOptimizerResponseProductProduct}
     */
    ImageOptimizerResponseProductProduct,

    /**
     * The ImageOptimizerResponseService model constructor.
     * @property {module:model/ImageOptimizerResponseService}
     */
    ImageOptimizerResponseService,

    /**
     * The IncludedWithTlsConfiguration model constructor.
     * @property {module:model/IncludedWithTlsConfiguration}
     */
    IncludedWithTlsConfiguration,

    /**
     * The IncludedWithTlsConfigurationItem model constructor.
     * @property {module:model/IncludedWithTlsConfigurationItem}
     */
    IncludedWithTlsConfigurationItem,

    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject,

    /**
     * The InlineObject1 model constructor.
     * @property {module:model/InlineObject1}
     */
    InlineObject1,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse20010 model constructor.
     * @property {module:model/InlineResponse20010}
     */
    InlineResponse20010,

    /**
     * The InlineResponse20011 model constructor.
     * @property {module:model/InlineResponse20011}
     */
    InlineResponse20011,

    /**
     * The InlineResponse20012 model constructor.
     * @property {module:model/InlineResponse20012}
     */
    InlineResponse20012,

    /**
     * The InlineResponse20013 model constructor.
     * @property {module:model/InlineResponse20013}
     */
    InlineResponse20013,

    /**
     * The InlineResponse20014 model constructor.
     * @property {module:model/InlineResponse20014}
     */
    InlineResponse20014,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006,

    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007,

    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008,

    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009,

    /**
     * The InlineResponse201 model constructor.
     * @property {module:model/InlineResponse201}
     */
    InlineResponse201,

    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400,

    /**
     * The Invitation model constructor.
     * @property {module:model/Invitation}
     */
    Invitation,

    /**
     * The InvitationCreateData model constructor.
     * @property {module:model/InvitationCreateData}
     */
    InvitationCreateData,

    /**
     * The InvitationCreateDataAllOf model constructor.
     * @property {module:model/InvitationCreateDataAllOf}
     */
    InvitationCreateDataAllOf,

    /**
     * The InvitationCreateResponse model constructor.
     * @property {module:model/InvitationCreateResponse}
     */
    InvitationCreateResponse,

    /**
     * The InvitationCreateResponseAllOf model constructor.
     * @property {module:model/InvitationCreateResponseAllOf}
     */
    InvitationCreateResponseAllOf,

    /**
     * The InvitationData model constructor.
     * @property {module:model/InvitationData}
     */
    InvitationData,

    /**
     * The InvitationDataAttributes model constructor.
     * @property {module:model/InvitationDataAttributes}
     */
    InvitationDataAttributes,

    /**
     * The InvitationResponseData model constructor.
     * @property {module:model/InvitationResponseData}
     */
    InvitationResponseData,

    /**
     * The InvitationResponseDataAllOf model constructor.
     * @property {module:model/InvitationResponseDataAllOf}
     */
    InvitationResponseDataAllOf,

    /**
     * The InvitationsResponse model constructor.
     * @property {module:model/InvitationsResponse}
     */
    InvitationsResponse,

    /**
     * The InvitationsResponseAllOf model constructor.
     * @property {module:model/InvitationsResponseAllOf}
     */
    InvitationsResponseAllOf,

    /**
     * The Invoice model constructor.
     * @property {module:model/Invoice}
     */
    Invoice,

    /**
     * The Invoicelineitems model constructor.
     * @property {module:model/Invoicelineitems}
     */
    Invoicelineitems,

    /**
     * The KvStoreBatchResponse model constructor.
     * @property {module:model/KvStoreBatchResponse}
     */
    KvStoreBatchResponse,

    /**
     * The KvStoreBatchResponseErrors model constructor.
     * @property {module:model/KvStoreBatchResponseErrors}
     */
    KvStoreBatchResponseErrors,

    /**
     * The KvStoreDetails model constructor.
     * @property {module:model/KvStoreDetails}
     */
    KvStoreDetails,

    /**
     * The KvStoreRequestCreateOrUpdate model constructor.
     * @property {module:model/KvStoreRequestCreateOrUpdate}
     */
    KvStoreRequestCreateOrUpdate,

    /**
     * The KvStoreUpsertBatch model constructor.
     * @property {module:model/KvStoreUpsertBatch}
     */
    KvStoreUpsertBatch,

    /**
     * The ListAttackReport model constructor.
     * @property {module:model/ListAttackReport}
     */
    ListAttackReport,

    /**
     * The ListAttackReportMeta model constructor.
     * @property {module:model/ListAttackReportMeta}
     */
    ListAttackReportMeta,

    /**
     * The ListCustomerAddressesResponse model constructor.
     * @property {module:model/ListCustomerAddressesResponse}
     */
    ListCustomerAddressesResponse,

    /**
     * The ListDashboardsResponse model constructor.
     * @property {module:model/ListDashboardsResponse}
     */
    ListDashboardsResponse,

    /**
     * The ListEomInvoicesResponse model constructor.
     * @property {module:model/ListEomInvoicesResponse}
     */
    ListEomInvoicesResponse,

    /**
     * The ListSignalReport model constructor.
     * @property {module:model/ListSignalReport}
     */
    ListSignalReport,

    /**
     * The Listinvoices model constructor.
     * @property {module:model/Listinvoices}
     */
    Listinvoices,

    /**
     * The LogAggregationsFilterFieldItem model constructor.
     * @property {module:model/LogAggregationsFilterFieldItem}
     */
    LogAggregationsFilterFieldItem,

    /**
     * The LogAggregationsGetResponse model constructor.
     * @property {module:model/LogAggregationsGetResponse}
     */
    LogAggregationsGetResponse,

    /**
     * The LogAggregationsGetResponseMeta model constructor.
     * @property {module:model/LogAggregationsGetResponseMeta}
     */
    LogAggregationsGetResponseMeta,

    /**
     * The LogAggregationsGetResponseMetaFilters model constructor.
     * @property {module:model/LogAggregationsGetResponseMetaFilters}
     */
    LogAggregationsGetResponseMetaFilters,

    /**
     * The LogAggregationsResult model constructor.
     * @property {module:model/LogAggregationsResult}
     */
    LogAggregationsResult,

    /**
     * The LogAggregationsValueField model constructor.
     * @property {module:model/LogAggregationsValueField}
     */
    LogAggregationsValueField,

    /**
     * The LogExplorerInsightsResponseBodyEnable model constructor.
     * @property {module:model/LogExplorerInsightsResponseBodyEnable}
     */
    LogExplorerInsightsResponseBodyEnable,

    /**
     * The LogExplorerInsightsResponseBodyGetAllServices model constructor.
     * @property {module:model/LogExplorerInsightsResponseBodyGetAllServices}
     */
    LogExplorerInsightsResponseBodyGetAllServices,

    /**
     * The LogExplorerInsightsResponseCustomer model constructor.
     * @property {module:model/LogExplorerInsightsResponseCustomer}
     */
    LogExplorerInsightsResponseCustomer,

    /**
     * The LogExplorerInsightsResponseEnabledServices model constructor.
     * @property {module:model/LogExplorerInsightsResponseEnabledServices}
     */
    LogExplorerInsightsResponseEnabledServices,

    /**
     * The LogExplorerInsightsResponseLinks model constructor.
     * @property {module:model/LogExplorerInsightsResponseLinks}
     */
    LogExplorerInsightsResponseLinks,

    /**
     * The LogExplorerInsightsResponseLinksGetAllServices model constructor.
     * @property {module:model/LogExplorerInsightsResponseLinksGetAllServices}
     */
    LogExplorerInsightsResponseLinksGetAllServices,

    /**
     * The LogExplorerInsightsResponseLinksGetAllServicesLinks model constructor.
     * @property {module:model/LogExplorerInsightsResponseLinksGetAllServicesLinks}
     */
    LogExplorerInsightsResponseLinksGetAllServicesLinks,

    /**
     * The LogExplorerInsightsResponseLinksLinks model constructor.
     * @property {module:model/LogExplorerInsightsResponseLinksLinks}
     */
    LogExplorerInsightsResponseLinksLinks,

    /**
     * The LogExplorerInsightsResponseProduct model constructor.
     * @property {module:model/LogExplorerInsightsResponseProduct}
     */
    LogExplorerInsightsResponseProduct,

    /**
     * The LogExplorerInsightsResponseProductProduct model constructor.
     * @property {module:model/LogExplorerInsightsResponseProductProduct}
     */
    LogExplorerInsightsResponseProductProduct,

    /**
     * The LogExplorerInsightsResponseService model constructor.
     * @property {module:model/LogExplorerInsightsResponseService}
     */
    LogExplorerInsightsResponseService,

    /**
     * The LogInsights model constructor.
     * @property {module:model/LogInsights}
     */
    LogInsights,

    /**
     * The LogInsightsDimensionAttributes model constructor.
     * @property {module:model/LogInsightsDimensionAttributes}
     */
    LogInsightsDimensionAttributes,

    /**
     * The LogInsightsDimensions model constructor.
     * @property {module:model/LogInsightsDimensions}
     */
    LogInsightsDimensions,

    /**
     * The LogInsightsMeta model constructor.
     * @property {module:model/LogInsightsMeta}
     */
    LogInsightsMeta,

    /**
     * The LogInsightsMetaFilter model constructor.
     * @property {module:model/LogInsightsMetaFilter}
     */
    LogInsightsMetaFilter,

    /**
     * The LogInsightsValues model constructor.
     * @property {module:model/LogInsightsValues}
     */
    LogInsightsValues,

    /**
     * The LogPropertyServiceId model constructor.
     * @property {module:model/LogPropertyServiceId}
     */
    LogPropertyServiceId,

    /**
     * The LogRecord model constructor.
     * @property {module:model/LogRecord}
     */
    LogRecord,

    /**
     * The LoggingAddressAndPort model constructor.
     * @property {module:model/LoggingAddressAndPort}
     */
    LoggingAddressAndPort,

    /**
     * The LoggingAzureblobAdditional model constructor.
     * @property {module:model/LoggingAzureblobAdditional}
     */
    LoggingAzureblobAdditional,

    /**
     * The LoggingAzureblobResponse model constructor.
     * @property {module:model/LoggingAzureblobResponse}
     */
    LoggingAzureblobResponse,

    /**
     * The LoggingBigqueryAdditional model constructor.
     * @property {module:model/LoggingBigqueryAdditional}
     */
    LoggingBigqueryAdditional,

    /**
     * The LoggingBigqueryResponse model constructor.
     * @property {module:model/LoggingBigqueryResponse}
     */
    LoggingBigqueryResponse,

    /**
     * The LoggingCloudfilesAdditional model constructor.
     * @property {module:model/LoggingCloudfilesAdditional}
     */
    LoggingCloudfilesAdditional,

    /**
     * The LoggingCloudfilesResponse model constructor.
     * @property {module:model/LoggingCloudfilesResponse}
     */
    LoggingCloudfilesResponse,

    /**
     * The LoggingCommon model constructor.
     * @property {module:model/LoggingCommon}
     */
    LoggingCommon,

    /**
     * The LoggingCommonResponse model constructor.
     * @property {module:model/LoggingCommonResponse}
     */
    LoggingCommonResponse,

    /**
     * The LoggingCommonResponseAllOf model constructor.
     * @property {module:model/LoggingCommonResponseAllOf}
     */
    LoggingCommonResponseAllOf,

    /**
     * The LoggingCommonResponseAllOf1 model constructor.
     * @property {module:model/LoggingCommonResponseAllOf1}
     */
    LoggingCommonResponseAllOf1,

    /**
     * The LoggingDatadogAdditional model constructor.
     * @property {module:model/LoggingDatadogAdditional}
     */
    LoggingDatadogAdditional,

    /**
     * The LoggingDatadogResponse model constructor.
     * @property {module:model/LoggingDatadogResponse}
     */
    LoggingDatadogResponse,

    /**
     * The LoggingDigitaloceanAdditional model constructor.
     * @property {module:model/LoggingDigitaloceanAdditional}
     */
    LoggingDigitaloceanAdditional,

    /**
     * The LoggingDigitaloceanResponse model constructor.
     * @property {module:model/LoggingDigitaloceanResponse}
     */
    LoggingDigitaloceanResponse,

    /**
     * The LoggingElasticsearchAdditional model constructor.
     * @property {module:model/LoggingElasticsearchAdditional}
     */
    LoggingElasticsearchAdditional,

    /**
     * The LoggingElasticsearchResponse model constructor.
     * @property {module:model/LoggingElasticsearchResponse}
     */
    LoggingElasticsearchResponse,

    /**
     * The LoggingFormatVersionInteger model constructor.
     * @property {module:model/LoggingFormatVersionInteger}
     */
    LoggingFormatVersionInteger,

    /**
     * The LoggingFormatVersionString model constructor.
     * @property {module:model/LoggingFormatVersionString}
     */
    LoggingFormatVersionString,

    /**
     * The LoggingFtpAdditional model constructor.
     * @property {module:model/LoggingFtpAdditional}
     */
    LoggingFtpAdditional,

    /**
     * The LoggingFtpResponse model constructor.
     * @property {module:model/LoggingFtpResponse}
     */
    LoggingFtpResponse,

    /**
     * The LoggingFtpResponseAllOf model constructor.
     * @property {module:model/LoggingFtpResponseAllOf}
     */
    LoggingFtpResponseAllOf,

    /**
     * The LoggingGcsAdditional model constructor.
     * @property {module:model/LoggingGcsAdditional}
     */
    LoggingGcsAdditional,

    /**
     * The LoggingGcsCommon model constructor.
     * @property {module:model/LoggingGcsCommon}
     */
    LoggingGcsCommon,

    /**
     * The LoggingGcsResponse model constructor.
     * @property {module:model/LoggingGcsResponse}
     */
    LoggingGcsResponse,

    /**
     * The LoggingGenericCommon model constructor.
     * @property {module:model/LoggingGenericCommon}
     */
    LoggingGenericCommon,

    /**
     * The LoggingGenericCommonResponse model constructor.
     * @property {module:model/LoggingGenericCommonResponse}
     */
    LoggingGenericCommonResponse,

    /**
     * The LoggingGenericCommonResponseAllOf model constructor.
     * @property {module:model/LoggingGenericCommonResponseAllOf}
     */
    LoggingGenericCommonResponseAllOf,

    /**
     * The LoggingGenericCommonResponseAllOf1 model constructor.
     * @property {module:model/LoggingGenericCommonResponseAllOf1}
     */
    LoggingGenericCommonResponseAllOf1,

    /**
     * The LoggingGooglePubsubAdditional model constructor.
     * @property {module:model/LoggingGooglePubsubAdditional}
     */
    LoggingGooglePubsubAdditional,

    /**
     * The LoggingGooglePubsubResponse model constructor.
     * @property {module:model/LoggingGooglePubsubResponse}
     */
    LoggingGooglePubsubResponse,

    /**
     * The LoggingGrafanacloudlogsAdditional model constructor.
     * @property {module:model/LoggingGrafanacloudlogsAdditional}
     */
    LoggingGrafanacloudlogsAdditional,

    /**
     * The LoggingGrafanacloudlogsResponse model constructor.
     * @property {module:model/LoggingGrafanacloudlogsResponse}
     */
    LoggingGrafanacloudlogsResponse,

    /**
     * The LoggingHerokuAdditional model constructor.
     * @property {module:model/LoggingHerokuAdditional}
     */
    LoggingHerokuAdditional,

    /**
     * The LoggingHerokuResponse model constructor.
     * @property {module:model/LoggingHerokuResponse}
     */
    LoggingHerokuResponse,

    /**
     * The LoggingHoneycombAdditional model constructor.
     * @property {module:model/LoggingHoneycombAdditional}
     */
    LoggingHoneycombAdditional,

    /**
     * The LoggingHoneycombResponse model constructor.
     * @property {module:model/LoggingHoneycombResponse}
     */
    LoggingHoneycombResponse,

    /**
     * The LoggingHttpsAdditional model constructor.
     * @property {module:model/LoggingHttpsAdditional}
     */
    LoggingHttpsAdditional,

    /**
     * The LoggingHttpsResponse model constructor.
     * @property {module:model/LoggingHttpsResponse}
     */
    LoggingHttpsResponse,

    /**
     * The LoggingKafkaAdditional model constructor.
     * @property {module:model/LoggingKafkaAdditional}
     */
    LoggingKafkaAdditional,

    /**
     * The LoggingKafkaResponse model constructor.
     * @property {module:model/LoggingKafkaResponse}
     */
    LoggingKafkaResponse,

    /**
     * The LoggingKafkaResponsePost model constructor.
     * @property {module:model/LoggingKafkaResponsePost}
     */
    LoggingKafkaResponsePost,

    /**
     * The LoggingKinesisAdditional model constructor.
     * @property {module:model/LoggingKinesisAdditional}
     */
    LoggingKinesisAdditional,

    /**
     * The LoggingKinesisResponse model constructor.
     * @property {module:model/LoggingKinesisResponse}
     */
    LoggingKinesisResponse,

    /**
     * The LoggingLogentriesAdditional model constructor.
     * @property {module:model/LoggingLogentriesAdditional}
     */
    LoggingLogentriesAdditional,

    /**
     * The LoggingLogentriesResponse model constructor.
     * @property {module:model/LoggingLogentriesResponse}
     */
    LoggingLogentriesResponse,

    /**
     * The LoggingLogglyAdditional model constructor.
     * @property {module:model/LoggingLogglyAdditional}
     */
    LoggingLogglyAdditional,

    /**
     * The LoggingLogglyResponse model constructor.
     * @property {module:model/LoggingLogglyResponse}
     */
    LoggingLogglyResponse,

    /**
     * The LoggingLogshuttleAdditional model constructor.
     * @property {module:model/LoggingLogshuttleAdditional}
     */
    LoggingLogshuttleAdditional,

    /**
     * The LoggingLogshuttleResponse model constructor.
     * @property {module:model/LoggingLogshuttleResponse}
     */
    LoggingLogshuttleResponse,

    /**
     * The LoggingMessageType model constructor.
     * @property {module:model/LoggingMessageType}
     */
    LoggingMessageType,

    /**
     * The LoggingNewrelicAdditional model constructor.
     * @property {module:model/LoggingNewrelicAdditional}
     */
    LoggingNewrelicAdditional,

    /**
     * The LoggingNewrelicResponse model constructor.
     * @property {module:model/LoggingNewrelicResponse}
     */
    LoggingNewrelicResponse,

    /**
     * The LoggingNewrelicotlpAdditional model constructor.
     * @property {module:model/LoggingNewrelicotlpAdditional}
     */
    LoggingNewrelicotlpAdditional,

    /**
     * The LoggingNewrelicotlpResponse model constructor.
     * @property {module:model/LoggingNewrelicotlpResponse}
     */
    LoggingNewrelicotlpResponse,

    /**
     * The LoggingOpenstackAdditional model constructor.
     * @property {module:model/LoggingOpenstackAdditional}
     */
    LoggingOpenstackAdditional,

    /**
     * The LoggingOpenstackResponse model constructor.
     * @property {module:model/LoggingOpenstackResponse}
     */
    LoggingOpenstackResponse,

    /**
     * The LoggingPapertrailResponse model constructor.
     * @property {module:model/LoggingPapertrailResponse}
     */
    LoggingPapertrailResponse,

    /**
     * The LoggingPlacement model constructor.
     * @property {module:model/LoggingPlacement}
     */
    LoggingPlacement,

    /**
     * The LoggingRequestCapsCommon model constructor.
     * @property {module:model/LoggingRequestCapsCommon}
     */
    LoggingRequestCapsCommon,

    /**
     * The LoggingS3Additional model constructor.
     * @property {module:model/LoggingS3Additional}
     */
    LoggingS3Additional,

    /**
     * The LoggingS3Response model constructor.
     * @property {module:model/LoggingS3Response}
     */
    LoggingS3Response,

    /**
     * The LoggingScalyrAdditional model constructor.
     * @property {module:model/LoggingScalyrAdditional}
     */
    LoggingScalyrAdditional,

    /**
     * The LoggingScalyrResponse model constructor.
     * @property {module:model/LoggingScalyrResponse}
     */
    LoggingScalyrResponse,

    /**
     * The LoggingSftpAdditional model constructor.
     * @property {module:model/LoggingSftpAdditional}
     */
    LoggingSftpAdditional,

    /**
     * The LoggingSftpResponse model constructor.
     * @property {module:model/LoggingSftpResponse}
     */
    LoggingSftpResponse,

    /**
     * The LoggingSftpResponseAllOf model constructor.
     * @property {module:model/LoggingSftpResponseAllOf}
     */
    LoggingSftpResponseAllOf,

    /**
     * The LoggingSplunkAdditional model constructor.
     * @property {module:model/LoggingSplunkAdditional}
     */
    LoggingSplunkAdditional,

    /**
     * The LoggingSplunkResponse model constructor.
     * @property {module:model/LoggingSplunkResponse}
     */
    LoggingSplunkResponse,

    /**
     * The LoggingSumologicAdditional model constructor.
     * @property {module:model/LoggingSumologicAdditional}
     */
    LoggingSumologicAdditional,

    /**
     * The LoggingSumologicResponse model constructor.
     * @property {module:model/LoggingSumologicResponse}
     */
    LoggingSumologicResponse,

    /**
     * The LoggingSyslogAdditional model constructor.
     * @property {module:model/LoggingSyslogAdditional}
     */
    LoggingSyslogAdditional,

    /**
     * The LoggingSyslogResponse model constructor.
     * @property {module:model/LoggingSyslogResponse}
     */
    LoggingSyslogResponse,

    /**
     * The LoggingTlsCommon model constructor.
     * @property {module:model/LoggingTlsCommon}
     */
    LoggingTlsCommon,

    /**
     * The LoggingUseTlsString model constructor.
     * @property {module:model/LoggingUseTlsString}
     */
    LoggingUseTlsString,

    /**
     * The Meta model constructor.
     * @property {module:model/Meta}
     */
    Meta,

    /**
     * The Metadata model constructor.
     * @property {module:model/Metadata}
     */
    Metadata,

    /**
     * The MtdInvoiceResponse model constructor.
     * @property {module:model/MtdInvoiceResponse}
     */
    MtdInvoiceResponse,

    /**
     * The Mtdinvoice model constructor.
     * @property {module:model/Mtdinvoice}
     */
    Mtdinvoice,

    /**
     * The Mtdlineitems model constructor.
     * @property {module:model/Mtdlineitems}
     */
    Mtdlineitems,

    /**
     * The MutualAuthentication model constructor.
     * @property {module:model/MutualAuthentication}
     */
    MutualAuthentication,

    /**
     * The MutualAuthenticationData model constructor.
     * @property {module:model/MutualAuthenticationData}
     */
    MutualAuthenticationData,

    /**
     * The MutualAuthenticationDataAttributes model constructor.
     * @property {module:model/MutualAuthenticationDataAttributes}
     */
    MutualAuthenticationDataAttributes,

    /**
     * The MutualAuthenticationResponse model constructor.
     * @property {module:model/MutualAuthenticationResponse}
     */
    MutualAuthenticationResponse,

    /**
     * The MutualAuthenticationResponseAttributes model constructor.
     * @property {module:model/MutualAuthenticationResponseAttributes}
     */
    MutualAuthenticationResponseAttributes,

    /**
     * The MutualAuthenticationResponseAttributesAllOf model constructor.
     * @property {module:model/MutualAuthenticationResponseAttributesAllOf}
     */
    MutualAuthenticationResponseAttributesAllOf,

    /**
     * The MutualAuthenticationResponseData model constructor.
     * @property {module:model/MutualAuthenticationResponseData}
     */
    MutualAuthenticationResponseData,

    /**
     * The MutualAuthenticationResponseDataAllOf model constructor.
     * @property {module:model/MutualAuthenticationResponseDataAllOf}
     */
    MutualAuthenticationResponseDataAllOf,

    /**
     * The MutualAuthenticationsResponse model constructor.
     * @property {module:model/MutualAuthenticationsResponse}
     */
    MutualAuthenticationsResponse,

    /**
     * The MutualAuthenticationsResponseAllOf model constructor.
     * @property {module:model/MutualAuthenticationsResponseAllOf}
     */
    MutualAuthenticationsResponseAllOf,

    /**
     * The NgwafRequestEnable model constructor.
     * @property {module:model/NgwafRequestEnable}
     */
    NgwafRequestEnable,

    /**
     * The NgwafRequestUpdateConfiguration model constructor.
     * @property {module:model/NgwafRequestUpdateConfiguration}
     */
    NgwafRequestUpdateConfiguration,

    /**
     * The NgwafResponseBodyGetAllServices model constructor.
     * @property {module:model/NgwafResponseBodyGetAllServices}
     */
    NgwafResponseBodyGetAllServices,

    /**
     * The NgwafResponseConfiguration model constructor.
     * @property {module:model/NgwafResponseConfiguration}
     */
    NgwafResponseConfiguration,

    /**
     * The NgwafResponseConfigurationConfiguration model constructor.
     * @property {module:model/NgwafResponseConfigurationConfiguration}
     */
    NgwafResponseConfigurationConfiguration,

    /**
     * The NgwafResponseConfigure model constructor.
     * @property {module:model/NgwafResponseConfigure}
     */
    NgwafResponseConfigure,

    /**
     * The NgwafResponseCustomer model constructor.
     * @property {module:model/NgwafResponseCustomer}
     */
    NgwafResponseCustomer,

    /**
     * The NgwafResponseEnable model constructor.
     * @property {module:model/NgwafResponseEnable}
     */
    NgwafResponseEnable,

    /**
     * The NgwafResponseEnabledServices model constructor.
     * @property {module:model/NgwafResponseEnabledServices}
     */
    NgwafResponseEnabledServices,

    /**
     * The NgwafResponseLinks model constructor.
     * @property {module:model/NgwafResponseLinks}
     */
    NgwafResponseLinks,

    /**
     * The NgwafResponseLinksGetAllServices model constructor.
     * @property {module:model/NgwafResponseLinksGetAllServices}
     */
    NgwafResponseLinksGetAllServices,

    /**
     * The NgwafResponseLinksGetAllServicesLinks model constructor.
     * @property {module:model/NgwafResponseLinksGetAllServicesLinks}
     */
    NgwafResponseLinksGetAllServicesLinks,

    /**
     * The NgwafResponseLinksLinks model constructor.
     * @property {module:model/NgwafResponseLinksLinks}
     */
    NgwafResponseLinksLinks,

    /**
     * The NgwafResponseProduct model constructor.
     * @property {module:model/NgwafResponseProduct}
     */
    NgwafResponseProduct,

    /**
     * The NgwafResponseProductProduct model constructor.
     * @property {module:model/NgwafResponseProductProduct}
     */
    NgwafResponseProductProduct,

    /**
     * The NgwafResponseService model constructor.
     * @property {module:model/NgwafResponseService}
     */
    NgwafResponseService,

    /**
     * The ObjectStorageResponseBodyEnable model constructor.
     * @property {module:model/ObjectStorageResponseBodyEnable}
     */
    ObjectStorageResponseBodyEnable,

    /**
     * The ObjectStorageResponseCustomer model constructor.
     * @property {module:model/ObjectStorageResponseCustomer}
     */
    ObjectStorageResponseCustomer,

    /**
     * The ObjectStorageResponseLinks model constructor.
     * @property {module:model/ObjectStorageResponseLinks}
     */
    ObjectStorageResponseLinks,

    /**
     * The ObjectStorageResponseLinksLinks model constructor.
     * @property {module:model/ObjectStorageResponseLinksLinks}
     */
    ObjectStorageResponseLinksLinks,

    /**
     * The ObjectStorageResponseProduct model constructor.
     * @property {module:model/ObjectStorageResponseProduct}
     */
    ObjectStorageResponseProduct,

    /**
     * The ObjectStorageResponseProductProduct model constructor.
     * @property {module:model/ObjectStorageResponseProductProduct}
     */
    ObjectStorageResponseProductProduct,

    /**
     * The Offer model constructor.
     * @property {module:model/Offer}
     */
    Offer,

    /**
     * The OfferAllOf model constructor.
     * @property {module:model/OfferAllOf}
     */
    OfferAllOf,

    /**
     * The OperationBase model constructor.
     * @property {module:model/OperationBase}
     */
    OperationBase,

    /**
     * The OperationCreate model constructor.
     * @property {module:model/OperationCreate}
     */
    OperationCreate,

    /**
     * The OperationGet model constructor.
     * @property {module:model/OperationGet}
     */
    OperationGet,

    /**
     * The OperationGetExtra model constructor.
     * @property {module:model/OperationGetExtra}
     */
    OperationGetExtra,

    /**
     * The OperationUpdate model constructor.
     * @property {module:model/OperationUpdate}
     */
    OperationUpdate,

    /**
     * The OriginInspector model constructor.
     * @property {module:model/OriginInspector}
     */
    OriginInspector,

    /**
     * The OriginInspectorDimensions model constructor.
     * @property {module:model/OriginInspectorDimensions}
     */
    OriginInspectorDimensions,

    /**
     * The OriginInspectorEntry model constructor.
     * @property {module:model/OriginInspectorEntry}
     */
    OriginInspectorEntry,

    /**
     * The OriginInspectorHistorical model constructor.
     * @property {module:model/OriginInspectorHistorical}
     */
    OriginInspectorHistorical,

    /**
     * The OriginInspectorHistoricalData model constructor.
     * @property {module:model/OriginInspectorHistoricalData}
     */
    OriginInspectorHistoricalData,

    /**
     * The OriginInspectorHistoricalMeta model constructor.
     * @property {module:model/OriginInspectorHistoricalMeta}
     */
    OriginInspectorHistoricalMeta,

    /**
     * The OriginInspectorHistoricalMetaFilters model constructor.
     * @property {module:model/OriginInspectorHistoricalMetaFilters}
     */
    OriginInspectorHistoricalMetaFilters,

    /**
     * The OriginInspectorMeasurements model constructor.
     * @property {module:model/OriginInspectorMeasurements}
     */
    OriginInspectorMeasurements,

    /**
     * The OriginInspectorRealtimeEntry model constructor.
     * @property {module:model/OriginInspectorRealtimeEntry}
     */
    OriginInspectorRealtimeEntry,

    /**
     * The OriginInspectorResponseBodyEnable model constructor.
     * @property {module:model/OriginInspectorResponseBodyEnable}
     */
    OriginInspectorResponseBodyEnable,

    /**
     * The OriginInspectorResponseBodyGetAllServices model constructor.
     * @property {module:model/OriginInspectorResponseBodyGetAllServices}
     */
    OriginInspectorResponseBodyGetAllServices,

    /**
     * The OriginInspectorResponseCustomer model constructor.
     * @property {module:model/OriginInspectorResponseCustomer}
     */
    OriginInspectorResponseCustomer,

    /**
     * The OriginInspectorResponseEnabledServices model constructor.
     * @property {module:model/OriginInspectorResponseEnabledServices}
     */
    OriginInspectorResponseEnabledServices,

    /**
     * The OriginInspectorResponseLinks model constructor.
     * @property {module:model/OriginInspectorResponseLinks}
     */
    OriginInspectorResponseLinks,

    /**
     * The OriginInspectorResponseLinksGetAllServices model constructor.
     * @property {module:model/OriginInspectorResponseLinksGetAllServices}
     */
    OriginInspectorResponseLinksGetAllServices,

    /**
     * The OriginInspectorResponseLinksGetAllServicesLinks model constructor.
     * @property {module:model/OriginInspectorResponseLinksGetAllServicesLinks}
     */
    OriginInspectorResponseLinksGetAllServicesLinks,

    /**
     * The OriginInspectorResponseLinksLinks model constructor.
     * @property {module:model/OriginInspectorResponseLinksLinks}
     */
    OriginInspectorResponseLinksLinks,

    /**
     * The OriginInspectorResponseProduct model constructor.
     * @property {module:model/OriginInspectorResponseProduct}
     */
    OriginInspectorResponseProduct,

    /**
     * The OriginInspectorResponseProductProduct model constructor.
     * @property {module:model/OriginInspectorResponseProductProduct}
     */
    OriginInspectorResponseProductProduct,

    /**
     * The OriginInspectorResponseService model constructor.
     * @property {module:model/OriginInspectorResponseService}
     */
    OriginInspectorResponseService,

    /**
     * The OriginInspectorValues model constructor.
     * @property {module:model/OriginInspectorValues}
     */
    OriginInspectorValues,

    /**
     * The Package model constructor.
     * @property {module:model/Package}
     */
    Package,

    /**
     * The PackageMetadata model constructor.
     * @property {module:model/PackageMetadata}
     */
    PackageMetadata,

    /**
     * The PackageResponse model constructor.
     * @property {module:model/PackageResponse}
     */
    PackageResponse,

    /**
     * The PackageResponseAllOf model constructor.
     * @property {module:model/PackageResponseAllOf}
     */
    PackageResponseAllOf,

    /**
     * The Pagination model constructor.
     * @property {module:model/Pagination}
     */
    Pagination,

    /**
     * The PaginationCursorMeta model constructor.
     * @property {module:model/PaginationCursorMeta}
     */
    PaginationCursorMeta,

    /**
     * The PaginationLinks model constructor.
     * @property {module:model/PaginationLinks}
     */
    PaginationLinks,

    /**
     * The PaginationMeta model constructor.
     * @property {module:model/PaginationMeta}
     */
    PaginationMeta,

    /**
     * The Permission model constructor.
     * @property {module:model/Permission}
     */
    Permission,

    /**
     * The PlatformDdosDataItems model constructor.
     * @property {module:model/PlatformDdosDataItems}
     */
    PlatformDdosDataItems,

    /**
     * The PlatformDdosEntry model constructor.
     * @property {module:model/PlatformDdosEntry}
     */
    PlatformDdosEntry,

    /**
     * The PlatformDdosResponse model constructor.
     * @property {module:model/PlatformDdosResponse}
     */
    PlatformDdosResponse,

    /**
     * The PlatformDdosResponseAllOf model constructor.
     * @property {module:model/PlatformDdosResponseAllOf}
     */
    PlatformDdosResponseAllOf,

    /**
     * The PlatformMetadata model constructor.
     * @property {module:model/PlatformMetadata}
     */
    PlatformMetadata,

    /**
     * The PlatformMetricsResponse model constructor.
     * @property {module:model/PlatformMetricsResponse}
     */
    PlatformMetricsResponse,

    /**
     * The PlatformValues model constructor.
     * @property {module:model/PlatformValues}
     */
    PlatformValues,

    /**
     * The PoolAdditional model constructor.
     * @property {module:model/PoolAdditional}
     */
    PoolAdditional,

    /**
     * The PoolResponse model constructor.
     * @property {module:model/PoolResponse}
     */
    PoolResponse,

    /**
     * The PoolResponseAllOf model constructor.
     * @property {module:model/PoolResponseAllOf}
     */
    PoolResponseAllOf,

    /**
     * The PoolResponseCommon model constructor.
     * @property {module:model/PoolResponseCommon}
     */
    PoolResponseCommon,

    /**
     * The PoolResponsePost model constructor.
     * @property {module:model/PoolResponsePost}
     */
    PoolResponsePost,

    /**
     * The PoolResponsePostAllOf model constructor.
     * @property {module:model/PoolResponsePostAllOf}
     */
    PoolResponsePostAllOf,

    /**
     * The Pop model constructor.
     * @property {module:model/Pop}
     */
    Pop,

    /**
     * The PopCoordinates model constructor.
     * @property {module:model/PopCoordinates}
     */
    PopCoordinates,

    /**
     * The PublicIpList model constructor.
     * @property {module:model/PublicIpList}
     */
    PublicIpList,

    /**
     * The PublishItem model constructor.
     * @property {module:model/PublishItem}
     */
    PublishItem,

    /**
     * The PublishItemFormats model constructor.
     * @property {module:model/PublishItemFormats}
     */
    PublishItemFormats,

    /**
     * The PublishRequest model constructor.
     * @property {module:model/PublishRequest}
     */
    PublishRequest,

    /**
     * The PurgeKeys model constructor.
     * @property {module:model/PurgeKeys}
     */
    PurgeKeys,

    /**
     * The PurgeResponse model constructor.
     * @property {module:model/PurgeResponse}
     */
    PurgeResponse,

    /**
     * The RateLimiter model constructor.
     * @property {module:model/RateLimiter}
     */
    RateLimiter,

    /**
     * The RateLimiterResponse model constructor.
     * @property {module:model/RateLimiterResponse}
     */
    RateLimiterResponse,

    /**
     * The RateLimiterResponseAllOf model constructor.
     * @property {module:model/RateLimiterResponseAllOf}
     */
    RateLimiterResponseAllOf,

    /**
     * The ReadOnlyCustomerId model constructor.
     * @property {module:model/ReadOnlyCustomerId}
     */
    ReadOnlyCustomerId,

    /**
     * The ReadOnlyId model constructor.
     * @property {module:model/ReadOnlyId}
     */
    ReadOnlyId,

    /**
     * The ReadOnlyUserId model constructor.
     * @property {module:model/ReadOnlyUserId}
     */
    ReadOnlyUserId,

    /**
     * The Realtime model constructor.
     * @property {module:model/Realtime}
     */
    Realtime,

    /**
     * The RealtimeEntry model constructor.
     * @property {module:model/RealtimeEntry}
     */
    RealtimeEntry,

    /**
     * The RealtimeEntryAggregated model constructor.
     * @property {module:model/RealtimeEntryAggregated}
     */
    RealtimeEntryAggregated,

    /**
     * The RealtimeEntryRecorded model constructor.
     * @property {module:model/RealtimeEntryRecorded}
     */
    RealtimeEntryRecorded,

    /**
     * The RealtimeMeasurements model constructor.
     * @property {module:model/RealtimeMeasurements}
     */
    RealtimeMeasurements,

    /**
     * The RelationshipCommonName model constructor.
     * @property {module:model/RelationshipCommonName}
     */
    RelationshipCommonName,

    /**
     * The RelationshipCustomer model constructor.
     * @property {module:model/RelationshipCustomer}
     */
    RelationshipCustomer,

    /**
     * The RelationshipCustomerCustomer model constructor.
     * @property {module:model/RelationshipCustomerCustomer}
     */
    RelationshipCustomerCustomer,

    /**
     * The RelationshipDefaultEcdsaTlsCertificate model constructor.
     * @property {module:model/RelationshipDefaultEcdsaTlsCertificate}
     */
    RelationshipDefaultEcdsaTlsCertificate,

    /**
     * The RelationshipDefaultEcdsaTlsCertificateDefaultEcdsaCertificate model constructor.
     * @property {module:model/RelationshipDefaultEcdsaTlsCertificateDefaultEcdsaCertificate}
     */
    RelationshipDefaultEcdsaTlsCertificateDefaultEcdsaCertificate,

    /**
     * The RelationshipDefaultEcdsaTlsCertificateDefaultEcdsaCertificateData model constructor.
     * @property {module:model/RelationshipDefaultEcdsaTlsCertificateDefaultEcdsaCertificateData}
     */
    RelationshipDefaultEcdsaTlsCertificateDefaultEcdsaCertificateData,

    /**
     * The RelationshipDefaultTlsCertificate model constructor.
     * @property {module:model/RelationshipDefaultTlsCertificate}
     */
    RelationshipDefaultTlsCertificate,

    /**
     * The RelationshipDefaultTlsCertificateDefaultCertificate model constructor.
     * @property {module:model/RelationshipDefaultTlsCertificateDefaultCertificate}
     */
    RelationshipDefaultTlsCertificateDefaultCertificate,

    /**
     * The RelationshipDefaultTlsCertificateDefaultCertificateData model constructor.
     * @property {module:model/RelationshipDefaultTlsCertificateDefaultCertificateData}
     */
    RelationshipDefaultTlsCertificateDefaultCertificateData,

    /**
     * The RelationshipMemberCustomer model constructor.
     * @property {module:model/RelationshipMemberCustomer}
     */
    RelationshipMemberCustomer,

    /**
     * The RelationshipMemberMutualAuthentication model constructor.
     * @property {module:model/RelationshipMemberMutualAuthentication}
     */
    RelationshipMemberMutualAuthentication,

    /**
     * The RelationshipMemberService model constructor.
     * @property {module:model/RelationshipMemberService}
     */
    RelationshipMemberService,

    /**
     * The RelationshipMemberServiceInvitation model constructor.
     * @property {module:model/RelationshipMemberServiceInvitation}
     */
    RelationshipMemberServiceInvitation,

    /**
     * The RelationshipMemberTlsActivation model constructor.
     * @property {module:model/RelationshipMemberTlsActivation}
     */
    RelationshipMemberTlsActivation,

    /**
     * The RelationshipMemberTlsBulkCertificate model constructor.
     * @property {module:model/RelationshipMemberTlsBulkCertificate}
     */
    RelationshipMemberTlsBulkCertificate,

    /**
     * The RelationshipMemberTlsCertificate model constructor.
     * @property {module:model/RelationshipMemberTlsCertificate}
     */
    RelationshipMemberTlsCertificate,

    /**
     * The RelationshipMemberTlsConfiguration model constructor.
     * @property {module:model/RelationshipMemberTlsConfiguration}
     */
    RelationshipMemberTlsConfiguration,

    /**
     * The RelationshipMemberTlsDomain model constructor.
     * @property {module:model/RelationshipMemberTlsDomain}
     */
    RelationshipMemberTlsDomain,

    /**
     * The RelationshipMemberTlsPrivateKey model constructor.
     * @property {module:model/RelationshipMemberTlsPrivateKey}
     */
    RelationshipMemberTlsPrivateKey,

    /**
     * The RelationshipMemberTlsSubscription model constructor.
     * @property {module:model/RelationshipMemberTlsSubscription}
     */
    RelationshipMemberTlsSubscription,

    /**
     * The RelationshipMutualAuthentication model constructor.
     * @property {module:model/RelationshipMutualAuthentication}
     */
    RelationshipMutualAuthentication,

    /**
     * The RelationshipMutualAuthenticationMutualAuthentication model constructor.
     * @property {module:model/RelationshipMutualAuthenticationMutualAuthentication}
     */
    RelationshipMutualAuthenticationMutualAuthentication,

    /**
     * The RelationshipMutualAuthentications model constructor.
     * @property {module:model/RelationshipMutualAuthentications}
     */
    RelationshipMutualAuthentications,

    /**
     * The RelationshipMutualAuthenticationsMutualAuthentications model constructor.
     * @property {module:model/RelationshipMutualAuthenticationsMutualAuthentications}
     */
    RelationshipMutualAuthenticationsMutualAuthentications,

    /**
     * The RelationshipService model constructor.
     * @property {module:model/RelationshipService}
     */
    RelationshipService,

    /**
     * The RelationshipServiceInvitations model constructor.
     * @property {module:model/RelationshipServiceInvitations}
     */
    RelationshipServiceInvitations,

    /**
     * The RelationshipServiceInvitationsCreate model constructor.
     * @property {module:model/RelationshipServiceInvitationsCreate}
     */
    RelationshipServiceInvitationsCreate,

    /**
     * The RelationshipServiceInvitationsCreateServiceInvitations model constructor.
     * @property {module:model/RelationshipServiceInvitationsCreateServiceInvitations}
     */
    RelationshipServiceInvitationsCreateServiceInvitations,

    /**
     * The RelationshipServiceInvitationsServiceInvitations model constructor.
     * @property {module:model/RelationshipServiceInvitationsServiceInvitations}
     */
    RelationshipServiceInvitationsServiceInvitations,

    /**
     * The RelationshipServices model constructor.
     * @property {module:model/RelationshipServices}
     */
    RelationshipServices,

    /**
     * The RelationshipServicesServices model constructor.
     * @property {module:model/RelationshipServicesServices}
     */
    RelationshipServicesServices,

    /**
     * The RelationshipTlsActivation model constructor.
     * @property {module:model/RelationshipTlsActivation}
     */
    RelationshipTlsActivation,

    /**
     * The RelationshipTlsActivationTlsActivation model constructor.
     * @property {module:model/RelationshipTlsActivationTlsActivation}
     */
    RelationshipTlsActivationTlsActivation,

    /**
     * The RelationshipTlsActivations model constructor.
     * @property {module:model/RelationshipTlsActivations}
     */
    RelationshipTlsActivations,

    /**
     * The RelationshipTlsBulkCertificate model constructor.
     * @property {module:model/RelationshipTlsBulkCertificate}
     */
    RelationshipTlsBulkCertificate,

    /**
     * The RelationshipTlsBulkCertificateTlsBulkCertificate model constructor.
     * @property {module:model/RelationshipTlsBulkCertificateTlsBulkCertificate}
     */
    RelationshipTlsBulkCertificateTlsBulkCertificate,

    /**
     * The RelationshipTlsBulkCertificates model constructor.
     * @property {module:model/RelationshipTlsBulkCertificates}
     */
    RelationshipTlsBulkCertificates,

    /**
     * The RelationshipTlsCertificate model constructor.
     * @property {module:model/RelationshipTlsCertificate}
     */
    RelationshipTlsCertificate,

    /**
     * The RelationshipTlsCertificateTlsCertificate model constructor.
     * @property {module:model/RelationshipTlsCertificateTlsCertificate}
     */
    RelationshipTlsCertificateTlsCertificate,

    /**
     * The RelationshipTlsCertificates model constructor.
     * @property {module:model/RelationshipTlsCertificates}
     */
    RelationshipTlsCertificates,

    /**
     * The RelationshipTlsCertificatesTlsCertificates model constructor.
     * @property {module:model/RelationshipTlsCertificatesTlsCertificates}
     */
    RelationshipTlsCertificatesTlsCertificates,

    /**
     * The RelationshipTlsConfiguration model constructor.
     * @property {module:model/RelationshipTlsConfiguration}
     */
    RelationshipTlsConfiguration,

    /**
     * The RelationshipTlsConfigurationForTlsSubscription model constructor.
     * @property {module:model/RelationshipTlsConfigurationForTlsSubscription}
     */
    RelationshipTlsConfigurationForTlsSubscription,

    /**
     * The RelationshipTlsConfigurationTlsConfiguration model constructor.
     * @property {module:model/RelationshipTlsConfigurationTlsConfiguration}
     */
    RelationshipTlsConfigurationTlsConfiguration,

    /**
     * The RelationshipTlsConfigurations model constructor.
     * @property {module:model/RelationshipTlsConfigurations}
     */
    RelationshipTlsConfigurations,

    /**
     * The RelationshipTlsConfigurationsTlsConfigurations model constructor.
     * @property {module:model/RelationshipTlsConfigurationsTlsConfigurations}
     */
    RelationshipTlsConfigurationsTlsConfigurations,

    /**
     * The RelationshipTlsDnsRecordsRequest model constructor.
     * @property {module:model/RelationshipTlsDnsRecordsRequest}
     */
    RelationshipTlsDnsRecordsRequest,

    /**
     * The RelationshipTlsDnsRecordsRequestDnsRecords model constructor.
     * @property {module:model/RelationshipTlsDnsRecordsRequestDnsRecords}
     */
    RelationshipTlsDnsRecordsRequestDnsRecords,

    /**
     * The RelationshipTlsDnsRecordsRequestDnsRecordsData model constructor.
     * @property {module:model/RelationshipTlsDnsRecordsRequestDnsRecordsData}
     */
    RelationshipTlsDnsRecordsRequestDnsRecordsData,

    /**
     * The RelationshipTlsDnsRecordsResponse model constructor.
     * @property {module:model/RelationshipTlsDnsRecordsResponse}
     */
    RelationshipTlsDnsRecordsResponse,

    /**
     * The RelationshipTlsDnsRecordsResponseDnsRecords model constructor.
     * @property {module:model/RelationshipTlsDnsRecordsResponseDnsRecords}
     */
    RelationshipTlsDnsRecordsResponseDnsRecords,

    /**
     * The RelationshipTlsDnsRecordsResponseDnsRecordsData model constructor.
     * @property {module:model/RelationshipTlsDnsRecordsResponseDnsRecordsData}
     */
    RelationshipTlsDnsRecordsResponseDnsRecordsData,

    /**
     * The RelationshipTlsDomain model constructor.
     * @property {module:model/RelationshipTlsDomain}
     */
    RelationshipTlsDomain,

    /**
     * The RelationshipTlsDomainTlsDomain model constructor.
     * @property {module:model/RelationshipTlsDomainTlsDomain}
     */
    RelationshipTlsDomainTlsDomain,

    /**
     * The RelationshipTlsDomains model constructor.
     * @property {module:model/RelationshipTlsDomains}
     */
    RelationshipTlsDomains,

    /**
     * The RelationshipTlsDomainsTlsDomains model constructor.
     * @property {module:model/RelationshipTlsDomainsTlsDomains}
     */
    RelationshipTlsDomainsTlsDomains,

    /**
     * The RelationshipTlsPrivateKey model constructor.
     * @property {module:model/RelationshipTlsPrivateKey}
     */
    RelationshipTlsPrivateKey,

    /**
     * The RelationshipTlsPrivateKeyTlsPrivateKey model constructor.
     * @property {module:model/RelationshipTlsPrivateKeyTlsPrivateKey}
     */
    RelationshipTlsPrivateKeyTlsPrivateKey,

    /**
     * The RelationshipTlsPrivateKeys model constructor.
     * @property {module:model/RelationshipTlsPrivateKeys}
     */
    RelationshipTlsPrivateKeys,

    /**
     * The RelationshipTlsPrivateKeysTlsPrivateKeys model constructor.
     * @property {module:model/RelationshipTlsPrivateKeysTlsPrivateKeys}
     */
    RelationshipTlsPrivateKeysTlsPrivateKeys,

    /**
     * The RelationshipTlsSubscription model constructor.
     * @property {module:model/RelationshipTlsSubscription}
     */
    RelationshipTlsSubscription,

    /**
     * The RelationshipTlsSubscriptionTlsSubscription model constructor.
     * @property {module:model/RelationshipTlsSubscriptionTlsSubscription}
     */
    RelationshipTlsSubscriptionTlsSubscription,

    /**
     * The RelationshipTlsSubscriptions model constructor.
     * @property {module:model/RelationshipTlsSubscriptions}
     */
    RelationshipTlsSubscriptions,

    /**
     * The RelationshipUser model constructor.
     * @property {module:model/RelationshipUser}
     */
    RelationshipUser,

    /**
     * The RelationshipUserUser model constructor.
     * @property {module:model/RelationshipUserUser}
     */
    RelationshipUserUser,

    /**
     * The RelationshipsForInvitation model constructor.
     * @property {module:model/RelationshipsForInvitation}
     */
    RelationshipsForInvitation,

    /**
     * The RelationshipsForMutualAuthentication model constructor.
     * @property {module:model/RelationshipsForMutualAuthentication}
     */
    RelationshipsForMutualAuthentication,

    /**
     * The RelationshipsForStar model constructor.
     * @property {module:model/RelationshipsForStar}
     */
    RelationshipsForStar,

    /**
     * The RelationshipsForTlsActivation model constructor.
     * @property {module:model/RelationshipsForTlsActivation}
     */
    RelationshipsForTlsActivation,

    /**
     * The RelationshipsForTlsBulkCertificate model constructor.
     * @property {module:model/RelationshipsForTlsBulkCertificate}
     */
    RelationshipsForTlsBulkCertificate,

    /**
     * The RelationshipsForTlsConfiguration model constructor.
     * @property {module:model/RelationshipsForTlsConfiguration}
     */
    RelationshipsForTlsConfiguration,

    /**
     * The RelationshipsForTlsDomain model constructor.
     * @property {module:model/RelationshipsForTlsDomain}
     */
    RelationshipsForTlsDomain,

    /**
     * The RelationshipsForTlsPrivateKey model constructor.
     * @property {module:model/RelationshipsForTlsPrivateKey}
     */
    RelationshipsForTlsPrivateKey,

    /**
     * The RelationshipsForTlsSubscription model constructor.
     * @property {module:model/RelationshipsForTlsSubscription}
     */
    RelationshipsForTlsSubscription,

    /**
     * The RequestBodyForCreate model constructor.
     * @property {module:model/RequestBodyForCreate}
     */
    RequestBodyForCreate,

    /**
     * The RequestBodyForUpdate model constructor.
     * @property {module:model/RequestBodyForUpdate}
     */
    RequestBodyForUpdate,

    /**
     * The RequestSettingsAdditional model constructor.
     * @property {module:model/RequestSettingsAdditional}
     */
    RequestSettingsAdditional,

    /**
     * The RequestSettingsResponse model constructor.
     * @property {module:model/RequestSettingsResponse}
     */
    RequestSettingsResponse,

    /**
     * The RequestSettingsResponseAllOf model constructor.
     * @property {module:model/RequestSettingsResponseAllOf}
     */
    RequestSettingsResponseAllOf,

    /**
     * The Resource model constructor.
     * @property {module:model/Resource}
     */
    Resource,

    /**
     * The ResourceResponse model constructor.
     * @property {module:model/ResourceResponse}
     */
    ResourceResponse,

    /**
     * The ResourceResponseAllOf model constructor.
     * @property {module:model/ResourceResponseAllOf}
     */
    ResourceResponseAllOf,

    /**
     * The ResponseObject model constructor.
     * @property {module:model/ResponseObject}
     */
    ResponseObject,

    /**
     * The ResponseObjectResponse model constructor.
     * @property {module:model/ResponseObjectResponse}
     */
    ResponseObjectResponse,

    /**
     * The Results model constructor.
     * @property {module:model/Results}
     */
    Results,

    /**
     * The RoleUser model constructor.
     * @property {module:model/RoleUser}
     */
    RoleUser,

    /**
     * The SchemasContactResponse model constructor.
     * @property {module:model/SchemasContactResponse}
     */
    SchemasContactResponse,

    /**
     * The SchemasSnippetResponse model constructor.
     * @property {module:model/SchemasSnippetResponse}
     */
    SchemasSnippetResponse,

    /**
     * The SchemasUserResponse model constructor.
     * @property {module:model/SchemasUserResponse}
     */
    SchemasUserResponse,

    /**
     * The SchemasUserResponseReadOnly model constructor.
     * @property {module:model/SchemasUserResponseReadOnly}
     */
    SchemasUserResponseReadOnly,

    /**
     * The SchemasVclResponse model constructor.
     * @property {module:model/SchemasVclResponse}
     */
    SchemasVclResponse,

    /**
     * The SchemasVersion model constructor.
     * @property {module:model/SchemasVersion}
     */
    SchemasVersion,

    /**
     * The SchemasVersionResponse model constructor.
     * @property {module:model/SchemasVersionResponse}
     */
    SchemasVersionResponse,

    /**
     * The Secret model constructor.
     * @property {module:model/Secret}
     */
    Secret,

    /**
     * The SecretResponse model constructor.
     * @property {module:model/SecretResponse}
     */
    SecretResponse,

    /**
     * The SecretStore model constructor.
     * @property {module:model/SecretStore}
     */
    SecretStore,

    /**
     * The SecretStoreResponse model constructor.
     * @property {module:model/SecretStoreResponse}
     */
    SecretStoreResponse,

    /**
     * The Server model constructor.
     * @property {module:model/Server}
     */
    Server,

    /**
     * The ServerResponse model constructor.
     * @property {module:model/ServerResponse}
     */
    ServerResponse,

    /**
     * The ServerResponseAllOf model constructor.
     * @property {module:model/ServerResponseAllOf}
     */
    ServerResponseAllOf,

    /**
     * The Service model constructor.
     * @property {module:model/Service}
     */
    Service,

    /**
     * The ServiceAuthorization model constructor.
     * @property {module:model/ServiceAuthorization}
     */
    ServiceAuthorization,

    /**
     * The ServiceAuthorizationData model constructor.
     * @property {module:model/ServiceAuthorizationData}
     */
    ServiceAuthorizationData,

    /**
     * The ServiceAuthorizationDataAttributes model constructor.
     * @property {module:model/ServiceAuthorizationDataAttributes}
     */
    ServiceAuthorizationDataAttributes,

    /**
     * The ServiceAuthorizationDataRelationships model constructor.
     * @property {module:model/ServiceAuthorizationDataRelationships}
     */
    ServiceAuthorizationDataRelationships,

    /**
     * The ServiceAuthorizationDataRelationshipsUser model constructor.
     * @property {module:model/ServiceAuthorizationDataRelationshipsUser}
     */
    ServiceAuthorizationDataRelationshipsUser,

    /**
     * The ServiceAuthorizationDataRelationshipsUserData model constructor.
     * @property {module:model/ServiceAuthorizationDataRelationshipsUserData}
     */
    ServiceAuthorizationDataRelationshipsUserData,

    /**
     * The ServiceAuthorizationResponse model constructor.
     * @property {module:model/ServiceAuthorizationResponse}
     */
    ServiceAuthorizationResponse,

    /**
     * The ServiceAuthorizationResponseData model constructor.
     * @property {module:model/ServiceAuthorizationResponseData}
     */
    ServiceAuthorizationResponseData,

    /**
     * The ServiceAuthorizationResponseDataAllOf model constructor.
     * @property {module:model/ServiceAuthorizationResponseDataAllOf}
     */
    ServiceAuthorizationResponseDataAllOf,

    /**
     * The ServiceAuthorizationsResponse model constructor.
     * @property {module:model/ServiceAuthorizationsResponse}
     */
    ServiceAuthorizationsResponse,

    /**
     * The ServiceAuthorizationsResponseAllOf model constructor.
     * @property {module:model/ServiceAuthorizationsResponseAllOf}
     */
    ServiceAuthorizationsResponseAllOf,

    /**
     * The ServiceCreate model constructor.
     * @property {module:model/ServiceCreate}
     */
    ServiceCreate,

    /**
     * The ServiceCreateAllOf model constructor.
     * @property {module:model/ServiceCreateAllOf}
     */
    ServiceCreateAllOf,

    /**
     * The ServiceDetail model constructor.
     * @property {module:model/ServiceDetail}
     */
    ServiceDetail,

    /**
     * The ServiceDetailAllOf model constructor.
     * @property {module:model/ServiceDetailAllOf}
     */
    ServiceDetailAllOf,

    /**
     * The ServiceIdAndVersion model constructor.
     * @property {module:model/ServiceIdAndVersion}
     */
    ServiceIdAndVersion,

    /**
     * The ServiceIdAndVersionString model constructor.
     * @property {module:model/ServiceIdAndVersionString}
     */
    ServiceIdAndVersionString,

    /**
     * The ServiceInvitation model constructor.
     * @property {module:model/ServiceInvitation}
     */
    ServiceInvitation,

    /**
     * The ServiceInvitationData model constructor.
     * @property {module:model/ServiceInvitationData}
     */
    ServiceInvitationData,

    /**
     * The ServiceInvitationDataAttributes model constructor.
     * @property {module:model/ServiceInvitationDataAttributes}
     */
    ServiceInvitationDataAttributes,

    /**
     * The ServiceInvitationDataRelationships model constructor.
     * @property {module:model/ServiceInvitationDataRelationships}
     */
    ServiceInvitationDataRelationships,

    /**
     * The ServiceInvitationResponse model constructor.
     * @property {module:model/ServiceInvitationResponse}
     */
    ServiceInvitationResponse,

    /**
     * The ServiceInvitationResponseAllOf model constructor.
     * @property {module:model/ServiceInvitationResponseAllOf}
     */
    ServiceInvitationResponseAllOf,

    /**
     * The ServiceInvitationResponseAllOfData model constructor.
     * @property {module:model/ServiceInvitationResponseAllOfData}
     */
    ServiceInvitationResponseAllOfData,

    /**
     * The ServiceListResponse model constructor.
     * @property {module:model/ServiceListResponse}
     */
    ServiceListResponse,

    /**
     * The ServiceListResponseAllOf model constructor.
     * @property {module:model/ServiceListResponseAllOf}
     */
    ServiceListResponseAllOf,

    /**
     * The ServiceResponse model constructor.
     * @property {module:model/ServiceResponse}
     */
    ServiceResponse,

    /**
     * The ServiceResponseAllOf model constructor.
     * @property {module:model/ServiceResponseAllOf}
     */
    ServiceResponseAllOf,

    /**
     * The ServiceVersionDetail model constructor.
     * @property {module:model/ServiceVersionDetail}
     */
    ServiceVersionDetail,

    /**
     * The ServiceVersionDetailOrNull model constructor.
     * @property {module:model/ServiceVersionDetailOrNull}
     */
    ServiceVersionDetailOrNull,

    /**
     * The Serviceusagemetric model constructor.
     * @property {module:model/Serviceusagemetric}
     */
    Serviceusagemetric,

    /**
     * The Serviceusagemetrics model constructor.
     * @property {module:model/Serviceusagemetrics}
     */
    Serviceusagemetrics,

    /**
     * The ServiceusagemetricsData model constructor.
     * @property {module:model/ServiceusagemetricsData}
     */
    ServiceusagemetricsData,

    /**
     * The Serviceusagetype model constructor.
     * @property {module:model/Serviceusagetype}
     */
    Serviceusagetype,

    /**
     * The Serviceusagetypes model constructor.
     * @property {module:model/Serviceusagetypes}
     */
    Serviceusagetypes,

    /**
     * The Settings model constructor.
     * @property {module:model/Settings}
     */
    Settings,

    /**
     * The SettingsResponse model constructor.
     * @property {module:model/SettingsResponse}
     */
    SettingsResponse,

    /**
     * The SignalReport model constructor.
     * @property {module:model/SignalReport}
     */
    SignalReport,

    /**
     * The SigningKey model constructor.
     * @property {module:model/SigningKey}
     */
    SigningKey,

    /**
     * The Snippet model constructor.
     * @property {module:model/Snippet}
     */
    Snippet,

    /**
     * The SnippetResponse model constructor.
     * @property {module:model/SnippetResponse}
     */
    SnippetResponse,

    /**
     * The SnippetResponseAllOf model constructor.
     * @property {module:model/SnippetResponseAllOf}
     */
    SnippetResponseAllOf,

    /**
     * The Star model constructor.
     * @property {module:model/Star}
     */
    Star,

    /**
     * The StarData model constructor.
     * @property {module:model/StarData}
     */
    StarData,

    /**
     * The StarResponse model constructor.
     * @property {module:model/StarResponse}
     */
    StarResponse,

    /**
     * The StarResponseAllOf model constructor.
     * @property {module:model/StarResponseAllOf}
     */
    StarResponseAllOf,

    /**
     * The Stats model constructor.
     * @property {module:model/Stats}
     */
    Stats,

    /**
     * The Status model constructor.
     * @property {module:model/Status}
     */
    Status,

    /**
     * The StatusAllOf model constructor.
     * @property {module:model/StatusAllOf}
     */
    StatusAllOf,

    /**
     * The SuccessfulResponseAsObject model constructor.
     * @property {module:model/SuccessfulResponseAsObject}
     */
    SuccessfulResponseAsObject,

    /**
     * The SuccessfulResponseAsObjectAllOf model constructor.
     * @property {module:model/SuccessfulResponseAsObjectAllOf}
     */
    SuccessfulResponseAsObjectAllOf,

    /**
     * The SudoGenericTokenError model constructor.
     * @property {module:model/SudoGenericTokenError}
     */
    SudoGenericTokenError,

    /**
     * The SudoRequest model constructor.
     * @property {module:model/SudoRequest}
     */
    SudoRequest,

    /**
     * The SudoResponse model constructor.
     * @property {module:model/SudoResponse}
     */
    SudoResponse,

    /**
     * The Suggestion model constructor.
     * @property {module:model/Suggestion}
     */
    Suggestion,

    /**
     * The SuggestionAllOf model constructor.
     * @property {module:model/SuggestionAllOf}
     */
    SuggestionAllOf,

    /**
     * The TagBase model constructor.
     * @property {module:model/TagBase}
     */
    TagBase,

    /**
     * The TagCreate model constructor.
     * @property {module:model/TagCreate}
     */
    TagCreate,

    /**
     * The TagGet model constructor.
     * @property {module:model/TagGet}
     */
    TagGet,

    /**
     * The TagGetExtra model constructor.
     * @property {module:model/TagGetExtra}
     */
    TagGetExtra,

    /**
     * The TimeseriesGetResponse model constructor.
     * @property {module:model/TimeseriesGetResponse}
     */
    TimeseriesGetResponse,

    /**
     * The TimeseriesMeta model constructor.
     * @property {module:model/TimeseriesMeta}
     */
    TimeseriesMeta,

    /**
     * The TimeseriesResult model constructor.
     * @property {module:model/TimeseriesResult}
     */
    TimeseriesResult,

    /**
     * The Timestamps model constructor.
     * @property {module:model/Timestamps}
     */
    Timestamps,

    /**
     * The TimestampsNoDelete model constructor.
     * @property {module:model/TimestampsNoDelete}
     */
    TimestampsNoDelete,

    /**
     * The TlsActivation model constructor.
     * @property {module:model/TlsActivation}
     */
    TlsActivation,

    /**
     * The TlsActivationData model constructor.
     * @property {module:model/TlsActivationData}
     */
    TlsActivationData,

    /**
     * The TlsActivationResponse model constructor.
     * @property {module:model/TlsActivationResponse}
     */
    TlsActivationResponse,

    /**
     * The TlsActivationResponseData model constructor.
     * @property {module:model/TlsActivationResponseData}
     */
    TlsActivationResponseData,

    /**
     * The TlsActivationResponseDataAllOf model constructor.
     * @property {module:model/TlsActivationResponseDataAllOf}
     */
    TlsActivationResponseDataAllOf,

    /**
     * The TlsActivationsResponse model constructor.
     * @property {module:model/TlsActivationsResponse}
     */
    TlsActivationsResponse,

    /**
     * The TlsActivationsResponseAllOf model constructor.
     * @property {module:model/TlsActivationsResponseAllOf}
     */
    TlsActivationsResponseAllOf,

    /**
     * The TlsBulkCertificate model constructor.
     * @property {module:model/TlsBulkCertificate}
     */
    TlsBulkCertificate,

    /**
     * The TlsBulkCertificateData model constructor.
     * @property {module:model/TlsBulkCertificateData}
     */
    TlsBulkCertificateData,

    /**
     * The TlsBulkCertificateDataAttributes model constructor.
     * @property {module:model/TlsBulkCertificateDataAttributes}
     */
    TlsBulkCertificateDataAttributes,

    /**
     * The TlsBulkCertificateResponse model constructor.
     * @property {module:model/TlsBulkCertificateResponse}
     */
    TlsBulkCertificateResponse,

    /**
     * The TlsBulkCertificateResponseAttributes model constructor.
     * @property {module:model/TlsBulkCertificateResponseAttributes}
     */
    TlsBulkCertificateResponseAttributes,

    /**
     * The TlsBulkCertificateResponseAttributesAllOf model constructor.
     * @property {module:model/TlsBulkCertificateResponseAttributesAllOf}
     */
    TlsBulkCertificateResponseAttributesAllOf,

    /**
     * The TlsBulkCertificateResponseData model constructor.
     * @property {module:model/TlsBulkCertificateResponseData}
     */
    TlsBulkCertificateResponseData,

    /**
     * The TlsBulkCertificateResponseDataAllOf model constructor.
     * @property {module:model/TlsBulkCertificateResponseDataAllOf}
     */
    TlsBulkCertificateResponseDataAllOf,

    /**
     * The TlsBulkCertificatesResponse model constructor.
     * @property {module:model/TlsBulkCertificatesResponse}
     */
    TlsBulkCertificatesResponse,

    /**
     * The TlsBulkCertificatesResponseAllOf model constructor.
     * @property {module:model/TlsBulkCertificatesResponseAllOf}
     */
    TlsBulkCertificatesResponseAllOf,

    /**
     * The TlsCertificate model constructor.
     * @property {module:model/TlsCertificate}
     */
    TlsCertificate,

    /**
     * The TlsCertificateBlobResponse model constructor.
     * @property {module:model/TlsCertificateBlobResponse}
     */
    TlsCertificateBlobResponse,

    /**
     * The TlsCertificateData model constructor.
     * @property {module:model/TlsCertificateData}
     */
    TlsCertificateData,

    /**
     * The TlsCertificateDataAttributes model constructor.
     * @property {module:model/TlsCertificateDataAttributes}
     */
    TlsCertificateDataAttributes,

    /**
     * The TlsCertificateResponse model constructor.
     * @property {module:model/TlsCertificateResponse}
     */
    TlsCertificateResponse,

    /**
     * The TlsCertificateResponseAttributes model constructor.
     * @property {module:model/TlsCertificateResponseAttributes}
     */
    TlsCertificateResponseAttributes,

    /**
     * The TlsCertificateResponseAttributesAllOf model constructor.
     * @property {module:model/TlsCertificateResponseAttributesAllOf}
     */
    TlsCertificateResponseAttributesAllOf,

    /**
     * The TlsCertificateResponseData model constructor.
     * @property {module:model/TlsCertificateResponseData}
     */
    TlsCertificateResponseData,

    /**
     * The TlsCertificateResponseDataAllOf model constructor.
     * @property {module:model/TlsCertificateResponseDataAllOf}
     */
    TlsCertificateResponseDataAllOf,

    /**
     * The TlsCertificatesResponse model constructor.
     * @property {module:model/TlsCertificatesResponse}
     */
    TlsCertificatesResponse,

    /**
     * The TlsCertificatesResponseAllOf model constructor.
     * @property {module:model/TlsCertificatesResponseAllOf}
     */
    TlsCertificatesResponseAllOf,

    /**
     * The TlsCommonResponse model constructor.
     * @property {module:model/TlsCommonResponse}
     */
    TlsCommonResponse,

    /**
     * The TlsCommonResponseAllOf model constructor.
     * @property {module:model/TlsCommonResponseAllOf}
     */
    TlsCommonResponseAllOf,

    /**
     * The TlsCommonResponseAllOf1 model constructor.
     * @property {module:model/TlsCommonResponseAllOf1}
     */
    TlsCommonResponseAllOf1,

    /**
     * The TlsConfiguration model constructor.
     * @property {module:model/TlsConfiguration}
     */
    TlsConfiguration,

    /**
     * The TlsConfigurationData model constructor.
     * @property {module:model/TlsConfigurationData}
     */
    TlsConfigurationData,

    /**
     * The TlsConfigurationDataAttributes model constructor.
     * @property {module:model/TlsConfigurationDataAttributes}
     */
    TlsConfigurationDataAttributes,

    /**
     * The TlsConfigurationResponse model constructor.
     * @property {module:model/TlsConfigurationResponse}
     */
    TlsConfigurationResponse,

    /**
     * The TlsConfigurationResponseAttributes model constructor.
     * @property {module:model/TlsConfigurationResponseAttributes}
     */
    TlsConfigurationResponseAttributes,

    /**
     * The TlsConfigurationResponseAttributesAllOf model constructor.
     * @property {module:model/TlsConfigurationResponseAttributesAllOf}
     */
    TlsConfigurationResponseAttributesAllOf,

    /**
     * The TlsConfigurationResponseData model constructor.
     * @property {module:model/TlsConfigurationResponseData}
     */
    TlsConfigurationResponseData,

    /**
     * The TlsConfigurationResponseDataAllOf model constructor.
     * @property {module:model/TlsConfigurationResponseDataAllOf}
     */
    TlsConfigurationResponseDataAllOf,

    /**
     * The TlsConfigurationsResponse model constructor.
     * @property {module:model/TlsConfigurationsResponse}
     */
    TlsConfigurationsResponse,

    /**
     * The TlsConfigurationsResponseAllOf model constructor.
     * @property {module:model/TlsConfigurationsResponseAllOf}
     */
    TlsConfigurationsResponseAllOf,

    /**
     * The TlsCsr model constructor.
     * @property {module:model/TlsCsr}
     */
    TlsCsr,

    /**
     * The TlsCsrData model constructor.
     * @property {module:model/TlsCsrData}
     */
    TlsCsrData,

    /**
     * The TlsCsrDataAttributes model constructor.
     * @property {module:model/TlsCsrDataAttributes}
     */
    TlsCsrDataAttributes,

    /**
     * The TlsCsrErrorResponse model constructor.
     * @property {module:model/TlsCsrErrorResponse}
     */
    TlsCsrErrorResponse,

    /**
     * The TlsCsrResponse model constructor.
     * @property {module:model/TlsCsrResponse}
     */
    TlsCsrResponse,

    /**
     * The TlsCsrResponseAttributes model constructor.
     * @property {module:model/TlsCsrResponseAttributes}
     */
    TlsCsrResponseAttributes,

    /**
     * The TlsCsrResponseData model constructor.
     * @property {module:model/TlsCsrResponseData}
     */
    TlsCsrResponseData,

    /**
     * The TlsDnsRecord model constructor.
     * @property {module:model/TlsDnsRecord}
     */
    TlsDnsRecord,

    /**
     * The TlsDomainData model constructor.
     * @property {module:model/TlsDomainData}
     */
    TlsDomainData,

    /**
     * The TlsDomainsResponse model constructor.
     * @property {module:model/TlsDomainsResponse}
     */
    TlsDomainsResponse,

    /**
     * The TlsDomainsResponseAllOf model constructor.
     * @property {module:model/TlsDomainsResponseAllOf}
     */
    TlsDomainsResponseAllOf,

    /**
     * The TlsPrivateKey model constructor.
     * @property {module:model/TlsPrivateKey}
     */
    TlsPrivateKey,

    /**
     * The TlsPrivateKeyData model constructor.
     * @property {module:model/TlsPrivateKeyData}
     */
    TlsPrivateKeyData,

    /**
     * The TlsPrivateKeyDataAttributes model constructor.
     * @property {module:model/TlsPrivateKeyDataAttributes}
     */
    TlsPrivateKeyDataAttributes,

    /**
     * The TlsPrivateKeyResponse model constructor.
     * @property {module:model/TlsPrivateKeyResponse}
     */
    TlsPrivateKeyResponse,

    /**
     * The TlsPrivateKeyResponseAttributes model constructor.
     * @property {module:model/TlsPrivateKeyResponseAttributes}
     */
    TlsPrivateKeyResponseAttributes,

    /**
     * The TlsPrivateKeyResponseAttributesAllOf model constructor.
     * @property {module:model/TlsPrivateKeyResponseAttributesAllOf}
     */
    TlsPrivateKeyResponseAttributesAllOf,

    /**
     * The TlsPrivateKeyResponseData model constructor.
     * @property {module:model/TlsPrivateKeyResponseData}
     */
    TlsPrivateKeyResponseData,

    /**
     * The TlsPrivateKeysResponse model constructor.
     * @property {module:model/TlsPrivateKeysResponse}
     */
    TlsPrivateKeysResponse,

    /**
     * The TlsPrivateKeysResponseAllOf model constructor.
     * @property {module:model/TlsPrivateKeysResponseAllOf}
     */
    TlsPrivateKeysResponseAllOf,

    /**
     * The TlsSubscription model constructor.
     * @property {module:model/TlsSubscription}
     */
    TlsSubscription,

    /**
     * The TlsSubscriptionData model constructor.
     * @property {module:model/TlsSubscriptionData}
     */
    TlsSubscriptionData,

    /**
     * The TlsSubscriptionDataAttributes model constructor.
     * @property {module:model/TlsSubscriptionDataAttributes}
     */
    TlsSubscriptionDataAttributes,

    /**
     * The TlsSubscriptionResponse model constructor.
     * @property {module:model/TlsSubscriptionResponse}
     */
    TlsSubscriptionResponse,

    /**
     * The TlsSubscriptionResponseAttributes model constructor.
     * @property {module:model/TlsSubscriptionResponseAttributes}
     */
    TlsSubscriptionResponseAttributes,

    /**
     * The TlsSubscriptionResponseAttributesAllOf model constructor.
     * @property {module:model/TlsSubscriptionResponseAttributesAllOf}
     */
    TlsSubscriptionResponseAttributesAllOf,

    /**
     * The TlsSubscriptionResponseData model constructor.
     * @property {module:model/TlsSubscriptionResponseData}
     */
    TlsSubscriptionResponseData,

    /**
     * The TlsSubscriptionsResponse model constructor.
     * @property {module:model/TlsSubscriptionsResponse}
     */
    TlsSubscriptionsResponse,

    /**
     * The TlsSubscriptionsResponseAllOf model constructor.
     * @property {module:model/TlsSubscriptionsResponseAllOf}
     */
    TlsSubscriptionsResponseAllOf,

    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token,

    /**
     * The TokenCreatedResponse model constructor.
     * @property {module:model/TokenCreatedResponse}
     */
    TokenCreatedResponse,

    /**
     * The TokenCreatedResponseAllOf model constructor.
     * @property {module:model/TokenCreatedResponseAllOf}
     */
    TokenCreatedResponseAllOf,

    /**
     * The TokenResponse model constructor.
     * @property {module:model/TokenResponse}
     */
    TokenResponse,

    /**
     * The TokenResponseAllOf model constructor.
     * @property {module:model/TokenResponseAllOf}
     */
    TokenResponseAllOf,

    /**
     * The TokensAdditionalProps model constructor.
     * @property {module:model/TokensAdditionalProps}
     */
    TokensAdditionalProps,

    /**
     * The TopWorkspace model constructor.
     * @property {module:model/TopWorkspace}
     */
    TopWorkspace,

    /**
     * The TypeBillingAddress model constructor.
     * @property {module:model/TypeBillingAddress}
     */
    TypeBillingAddress,

    /**
     * The TypeContact model constructor.
     * @property {module:model/TypeContact}
     */
    TypeContact,

    /**
     * The TypeCustomer model constructor.
     * @property {module:model/TypeCustomer}
     */
    TypeCustomer,

    /**
     * The TypeEvent model constructor.
     * @property {module:model/TypeEvent}
     */
    TypeEvent,

    /**
     * The TypeInvitation model constructor.
     * @property {module:model/TypeInvitation}
     */
    TypeInvitation,

    /**
     * The TypeMutualAuthentication model constructor.
     * @property {module:model/TypeMutualAuthentication}
     */
    TypeMutualAuthentication,

    /**
     * The TypeResource model constructor.
     * @property {module:model/TypeResource}
     */
    TypeResource,

    /**
     * The TypeService model constructor.
     * @property {module:model/TypeService}
     */
    TypeService,

    /**
     * The TypeServiceAuthorization model constructor.
     * @property {module:model/TypeServiceAuthorization}
     */
    TypeServiceAuthorization,

    /**
     * The TypeServiceInvitation model constructor.
     * @property {module:model/TypeServiceInvitation}
     */
    TypeServiceInvitation,

    /**
     * The TypeStar model constructor.
     * @property {module:model/TypeStar}
     */
    TypeStar,

    /**
     * The TypeTlsActivation model constructor.
     * @property {module:model/TypeTlsActivation}
     */
    TypeTlsActivation,

    /**
     * The TypeTlsBulkCertificate model constructor.
     * @property {module:model/TypeTlsBulkCertificate}
     */
    TypeTlsBulkCertificate,

    /**
     * The TypeTlsCertificate model constructor.
     * @property {module:model/TypeTlsCertificate}
     */
    TypeTlsCertificate,

    /**
     * The TypeTlsConfiguration model constructor.
     * @property {module:model/TypeTlsConfiguration}
     */
    TypeTlsConfiguration,

    /**
     * The TypeTlsCsr model constructor.
     * @property {module:model/TypeTlsCsr}
     */
    TypeTlsCsr,

    /**
     * The TypeTlsDnsRecord model constructor.
     * @property {module:model/TypeTlsDnsRecord}
     */
    TypeTlsDnsRecord,

    /**
     * The TypeTlsDomain model constructor.
     * @property {module:model/TypeTlsDomain}
     */
    TypeTlsDomain,

    /**
     * The TypeTlsPrivateKey model constructor.
     * @property {module:model/TypeTlsPrivateKey}
     */
    TypeTlsPrivateKey,

    /**
     * The TypeTlsSubscription model constructor.
     * @property {module:model/TypeTlsSubscription}
     */
    TypeTlsSubscription,

    /**
     * The TypeUser model constructor.
     * @property {module:model/TypeUser}
     */
    TypeUser,

    /**
     * The UpdateBillingAddressRequest model constructor.
     * @property {module:model/UpdateBillingAddressRequest}
     */
    UpdateBillingAddressRequest,

    /**
     * The UpdateBillingAddressRequestData model constructor.
     * @property {module:model/UpdateBillingAddressRequestData}
     */
    UpdateBillingAddressRequestData,

    /**
     * The UpdateDashboardRequest model constructor.
     * @property {module:model/UpdateDashboardRequest}
     */
    UpdateDashboardRequest,

    /**
     * The Usagemetric model constructor.
     * @property {module:model/Usagemetric}
     */
    Usagemetric,

    /**
     * The Usagemetrics model constructor.
     * @property {module:model/Usagemetrics}
     */
    Usagemetrics,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserResponse model constructor.
     * @property {module:model/UserResponse}
     */
    UserResponse,

    /**
     * The UserResponseReadOnly model constructor.
     * @property {module:model/UserResponseReadOnly}
     */
    UserResponseReadOnly,

    /**
     * The ValidatorResult model constructor.
     * @property {module:model/ValidatorResult}
     */
    ValidatorResult,

    /**
     * The ValidatorResultData model constructor.
     * @property {module:model/ValidatorResultData}
     */
    ValidatorResultData,

    /**
     * The ValidatorResultDataAttributes model constructor.
     * @property {module:model/ValidatorResultDataAttributes}
     */
    ValidatorResultDataAttributes,

    /**
     * The ValidatorResultDataAttributesMessages model constructor.
     * @property {module:model/ValidatorResultDataAttributesMessages}
     */
    ValidatorResultDataAttributesMessages,

    /**
     * The ValueField model constructor.
     * @property {module:model/ValueField}
     */
    ValueField,

    /**
     * The Values model constructor.
     * @property {module:model/Values}
     */
    Values,

    /**
     * The Values503Responses model constructor.
     * @property {module:model/Values503Responses}
     */
    Values503Responses,

    /**
     * The ValuesBandwidth model constructor.
     * @property {module:model/ValuesBandwidth}
     */
    ValuesBandwidth,

    /**
     * The ValuesBrowser model constructor.
     * @property {module:model/ValuesBrowser}
     */
    ValuesBrowser,

    /**
     * The ValuesCacheHitRatio model constructor.
     * @property {module:model/ValuesCacheHitRatio}
     */
    ValuesCacheHitRatio,

    /**
     * The ValuesCountryStats model constructor.
     * @property {module:model/ValuesCountryStats}
     */
    ValuesCountryStats,

    /**
     * The ValuesDdos model constructor.
     * @property {module:model/ValuesDdos}
     */
    ValuesDdos,

    /**
     * The ValuesDuration model constructor.
     * @property {module:model/ValuesDuration}
     */
    ValuesDuration,

    /**
     * The ValuesMisses model constructor.
     * @property {module:model/ValuesMisses}
     */
    ValuesMisses,

    /**
     * The ValuesRate model constructor.
     * @property {module:model/ValuesRate}
     */
    ValuesRate,

    /**
     * The ValuesRequests model constructor.
     * @property {module:model/ValuesRequests}
     */
    ValuesRequests,

    /**
     * The ValuesStatusCodes model constructor.
     * @property {module:model/ValuesStatusCodes}
     */
    ValuesStatusCodes,

    /**
     * The Vcl model constructor.
     * @property {module:model/Vcl}
     */
    Vcl,

    /**
     * The VclDiff model constructor.
     * @property {module:model/VclDiff}
     */
    VclDiff,

    /**
     * The VclResponse model constructor.
     * @property {module:model/VclResponse}
     */
    VclResponse,

    /**
     * The VclSyntaxHighlightingResponse model constructor.
     * @property {module:model/VclSyntaxHighlightingResponse}
     */
    VclSyntaxHighlightingResponse,

    /**
     * The Version model constructor.
     * @property {module:model/Version}
     */
    Version,

    /**
     * The VersionCreateResponse model constructor.
     * @property {module:model/VersionCreateResponse}
     */
    VersionCreateResponse,

    /**
     * The VersionDetail model constructor.
     * @property {module:model/VersionDetail}
     */
    VersionDetail,

    /**
     * The VersionDetailSettings model constructor.
     * @property {module:model/VersionDetailSettings}
     */
    VersionDetailSettings,

    /**
     * The VersionResponse model constructor.
     * @property {module:model/VersionResponse}
     */
    VersionResponse,

    /**
     * The VersionResponseAllOf model constructor.
     * @property {module:model/VersionResponseAllOf}
     */
    VersionResponseAllOf,

    /**
     * The WebsocketsResponseBodyEnable model constructor.
     * @property {module:model/WebsocketsResponseBodyEnable}
     */
    WebsocketsResponseBodyEnable,

    /**
     * The WebsocketsResponseBodyGetAllServices model constructor.
     * @property {module:model/WebsocketsResponseBodyGetAllServices}
     */
    WebsocketsResponseBodyGetAllServices,

    /**
     * The WebsocketsResponseCustomer model constructor.
     * @property {module:model/WebsocketsResponseCustomer}
     */
    WebsocketsResponseCustomer,

    /**
     * The WebsocketsResponseEnabledServices model constructor.
     * @property {module:model/WebsocketsResponseEnabledServices}
     */
    WebsocketsResponseEnabledServices,

    /**
     * The WebsocketsResponseLinks model constructor.
     * @property {module:model/WebsocketsResponseLinks}
     */
    WebsocketsResponseLinks,

    /**
     * The WebsocketsResponseLinksGetAllServices model constructor.
     * @property {module:model/WebsocketsResponseLinksGetAllServices}
     */
    WebsocketsResponseLinksGetAllServices,

    /**
     * The WebsocketsResponseLinksGetAllServicesLinks model constructor.
     * @property {module:model/WebsocketsResponseLinksGetAllServicesLinks}
     */
    WebsocketsResponseLinksGetAllServicesLinks,

    /**
     * The WebsocketsResponseLinksLinks model constructor.
     * @property {module:model/WebsocketsResponseLinksLinks}
     */
    WebsocketsResponseLinksLinks,

    /**
     * The WebsocketsResponseProduct model constructor.
     * @property {module:model/WebsocketsResponseProduct}
     */
    WebsocketsResponseProduct,

    /**
     * The WebsocketsResponseProductProduct model constructor.
     * @property {module:model/WebsocketsResponseProductProduct}
     */
    WebsocketsResponseProductProduct,

    /**
     * The WebsocketsResponseService model constructor.
     * @property {module:model/WebsocketsResponseService}
     */
    WebsocketsResponseService,

    /**
     * The WsMessageFormat model constructor.
     * @property {module:model/WsMessageFormat}
     */
    WsMessageFormat,

    /**
    * The AclApi service constructor.
    * @property {module:api/AclApi}
    */
    AclApi,

    /**
    * The AclEntryApi service constructor.
    * @property {module:api/AclEntryApi}
    */
    AclEntryApi,

    /**
    * The AclsInComputeApi service constructor.
    * @property {module:api/AclsInComputeApi}
    */
    AclsInComputeApi,

    /**
    * The ApexRedirectApi service constructor.
    * @property {module:api/ApexRedirectApi}
    */
    ApexRedirectApi,

    /**
    * The ApisecurityOperationsApi service constructor.
    * @property {module:api/ApisecurityOperationsApi}
    */
    ApisecurityOperationsApi,

    /**
    * The AutomationTokensApi service constructor.
    * @property {module:api/AutomationTokensApi}
    */
    AutomationTokensApi,

    /**
    * The BackendApi service constructor.
    * @property {module:api/BackendApi}
    */
    BackendApi,

    /**
    * The BillingAddressApi service constructor.
    * @property {module:api/BillingAddressApi}
    */
    BillingAddressApi,

    /**
    * The BillingInvoicesApi service constructor.
    * @property {module:api/BillingInvoicesApi}
    */
    BillingInvoicesApi,

    /**
    * The BillingUsageMetricsApi service constructor.
    * @property {module:api/BillingUsageMetricsApi}
    */
    BillingUsageMetricsApi,

    /**
    * The CacheSettingsApi service constructor.
    * @property {module:api/CacheSettingsApi}
    */
    CacheSettingsApi,

    /**
    * The ConditionApi service constructor.
    * @property {module:api/ConditionApi}
    */
    ConditionApi,

    /**
    * The ConfigStoreApi service constructor.
    * @property {module:api/ConfigStoreApi}
    */
    ConfigStoreApi,

    /**
    * The ConfigStoreItemApi service constructor.
    * @property {module:api/ConfigStoreItemApi}
    */
    ConfigStoreItemApi,

    /**
    * The ContactApi service constructor.
    * @property {module:api/ContactApi}
    */
    ContactApi,

    /**
    * The ContentApi service constructor.
    * @property {module:api/ContentApi}
    */
    ContentApi,

    /**
    * The CustomerApi service constructor.
    * @property {module:api/CustomerApi}
    */
    CustomerApi,

    /**
    * The CustomerAddressesApi service constructor.
    * @property {module:api/CustomerAddressesApi}
    */
    CustomerAddressesApi,

    /**
    * The DdosProtectionApi service constructor.
    * @property {module:api/DdosProtectionApi}
    */
    DdosProtectionApi,

    /**
    * The DictionaryApi service constructor.
    * @property {module:api/DictionaryApi}
    */
    DictionaryApi,

    /**
    * The DictionaryInfoApi service constructor.
    * @property {module:api/DictionaryInfoApi}
    */
    DictionaryInfoApi,

    /**
    * The DictionaryItemApi service constructor.
    * @property {module:api/DictionaryItemApi}
    */
    DictionaryItemApi,

    /**
    * The DiffApi service constructor.
    * @property {module:api/DiffApi}
    */
    DiffApi,

    /**
    * The DirectorApi service constructor.
    * @property {module:api/DirectorApi}
    */
    DirectorApi,

    /**
    * The DirectorBackendApi service constructor.
    * @property {module:api/DirectorBackendApi}
    */
    DirectorBackendApi,

    /**
    * The DmDomainsApi service constructor.
    * @property {module:api/DmDomainsApi}
    */
    DmDomainsApi,

    /**
    * The DomainApi service constructor.
    * @property {module:api/DomainApi}
    */
    DomainApi,

    /**
    * The DomainInspectorHistoricalApi service constructor.
    * @property {module:api/DomainInspectorHistoricalApi}
    */
    DomainInspectorHistoricalApi,

    /**
    * The DomainInspectorRealtimeApi service constructor.
    * @property {module:api/DomainInspectorRealtimeApi}
    */
    DomainInspectorRealtimeApi,

    /**
    * The DomainOwnershipsApi service constructor.
    * @property {module:api/DomainOwnershipsApi}
    */
    DomainOwnershipsApi,

    /**
    * The DomainResearchApi service constructor.
    * @property {module:api/DomainResearchApi}
    */
    DomainResearchApi,

    /**
    * The EventsApi service constructor.
    * @property {module:api/EventsApi}
    */
    EventsApi,

    /**
    * The GzipApi service constructor.
    * @property {module:api/GzipApi}
    */
    GzipApi,

    /**
    * The HeaderApi service constructor.
    * @property {module:api/HeaderApi}
    */
    HeaderApi,

    /**
    * The HealthcheckApi service constructor.
    * @property {module:api/HealthcheckApi}
    */
    HealthcheckApi,

    /**
    * The HistoricalApi service constructor.
    * @property {module:api/HistoricalApi}
    */
    HistoricalApi,

    /**
    * The Http3Api service constructor.
    * @property {module:api/Http3Api}
    */
    Http3Api,

    /**
    * The IamPermissionsApi service constructor.
    * @property {module:api/IamPermissionsApi}
    */
    IamPermissionsApi,

    /**
    * The IamRolesApi service constructor.
    * @property {module:api/IamRolesApi}
    */
    IamRolesApi,

    /**
    * The IamServiceGroupsApi service constructor.
    * @property {module:api/IamServiceGroupsApi}
    */
    IamServiceGroupsApi,

    /**
    * The IamUserGroupsApi service constructor.
    * @property {module:api/IamUserGroupsApi}
    */
    IamUserGroupsApi,

    /**
    * The ImageOptimizerDefaultSettingsApi service constructor.
    * @property {module:api/ImageOptimizerDefaultSettingsApi}
    */
    ImageOptimizerDefaultSettingsApi,

    /**
    * The InsightsApi service constructor.
    * @property {module:api/InsightsApi}
    */
    InsightsApi,

    /**
    * The InvitationsApi service constructor.
    * @property {module:api/InvitationsApi}
    */
    InvitationsApi,

    /**
    * The KvStoreApi service constructor.
    * @property {module:api/KvStoreApi}
    */
    KvStoreApi,

    /**
    * The KvStoreItemApi service constructor.
    * @property {module:api/KvStoreItemApi}
    */
    KvStoreItemApi,

    /**
    * The LogExplorerApi service constructor.
    * @property {module:api/LogExplorerApi}
    */
    LogExplorerApi,

    /**
    * The LoggingAzureblobApi service constructor.
    * @property {module:api/LoggingAzureblobApi}
    */
    LoggingAzureblobApi,

    /**
    * The LoggingBigqueryApi service constructor.
    * @property {module:api/LoggingBigqueryApi}
    */
    LoggingBigqueryApi,

    /**
    * The LoggingCloudfilesApi service constructor.
    * @property {module:api/LoggingCloudfilesApi}
    */
    LoggingCloudfilesApi,

    /**
    * The LoggingDatadogApi service constructor.
    * @property {module:api/LoggingDatadogApi}
    */
    LoggingDatadogApi,

    /**
    * The LoggingDigitaloceanApi service constructor.
    * @property {module:api/LoggingDigitaloceanApi}
    */
    LoggingDigitaloceanApi,

    /**
    * The LoggingElasticsearchApi service constructor.
    * @property {module:api/LoggingElasticsearchApi}
    */
    LoggingElasticsearchApi,

    /**
    * The LoggingFtpApi service constructor.
    * @property {module:api/LoggingFtpApi}
    */
    LoggingFtpApi,

    /**
    * The LoggingGcsApi service constructor.
    * @property {module:api/LoggingGcsApi}
    */
    LoggingGcsApi,

    /**
    * The LoggingGrafanacloudlogsApi service constructor.
    * @property {module:api/LoggingGrafanacloudlogsApi}
    */
    LoggingGrafanacloudlogsApi,

    /**
    * The LoggingHerokuApi service constructor.
    * @property {module:api/LoggingHerokuApi}
    */
    LoggingHerokuApi,

    /**
    * The LoggingHoneycombApi service constructor.
    * @property {module:api/LoggingHoneycombApi}
    */
    LoggingHoneycombApi,

    /**
    * The LoggingHttpsApi service constructor.
    * @property {module:api/LoggingHttpsApi}
    */
    LoggingHttpsApi,

    /**
    * The LoggingKafkaApi service constructor.
    * @property {module:api/LoggingKafkaApi}
    */
    LoggingKafkaApi,

    /**
    * The LoggingKinesisApi service constructor.
    * @property {module:api/LoggingKinesisApi}
    */
    LoggingKinesisApi,

    /**
    * The LoggingLogentriesApi service constructor.
    * @property {module:api/LoggingLogentriesApi}
    */
    LoggingLogentriesApi,

    /**
    * The LoggingLogglyApi service constructor.
    * @property {module:api/LoggingLogglyApi}
    */
    LoggingLogglyApi,

    /**
    * The LoggingLogshuttleApi service constructor.
    * @property {module:api/LoggingLogshuttleApi}
    */
    LoggingLogshuttleApi,

    /**
    * The LoggingNewrelicApi service constructor.
    * @property {module:api/LoggingNewrelicApi}
    */
    LoggingNewrelicApi,

    /**
    * The LoggingNewrelicotlpApi service constructor.
    * @property {module:api/LoggingNewrelicotlpApi}
    */
    LoggingNewrelicotlpApi,

    /**
    * The LoggingOpenstackApi service constructor.
    * @property {module:api/LoggingOpenstackApi}
    */
    LoggingOpenstackApi,

    /**
    * The LoggingPapertrailApi service constructor.
    * @property {module:api/LoggingPapertrailApi}
    */
    LoggingPapertrailApi,

    /**
    * The LoggingPubsubApi service constructor.
    * @property {module:api/LoggingPubsubApi}
    */
    LoggingPubsubApi,

    /**
    * The LoggingS3Api service constructor.
    * @property {module:api/LoggingS3Api}
    */
    LoggingS3Api,

    /**
    * The LoggingScalyrApi service constructor.
    * @property {module:api/LoggingScalyrApi}
    */
    LoggingScalyrApi,

    /**
    * The LoggingSftpApi service constructor.
    * @property {module:api/LoggingSftpApi}
    */
    LoggingSftpApi,

    /**
    * The LoggingSplunkApi service constructor.
    * @property {module:api/LoggingSplunkApi}
    */
    LoggingSplunkApi,

    /**
    * The LoggingSumologicApi service constructor.
    * @property {module:api/LoggingSumologicApi}
    */
    LoggingSumologicApi,

    /**
    * The LoggingSyslogApi service constructor.
    * @property {module:api/LoggingSyslogApi}
    */
    LoggingSyslogApi,

    /**
    * The MetricsPlatformApi service constructor.
    * @property {module:api/MetricsPlatformApi}
    */
    MetricsPlatformApi,

    /**
    * The MutualAuthenticationApi service constructor.
    * @property {module:api/MutualAuthenticationApi}
    */
    MutualAuthenticationApi,

    /**
    * The NgwafReportsApi service constructor.
    * @property {module:api/NgwafReportsApi}
    */
    NgwafReportsApi,

    /**
    * The ObjectStorageAccessKeysApi service constructor.
    * @property {module:api/ObjectStorageAccessKeysApi}
    */
    ObjectStorageAccessKeysApi,

    /**
    * The ObservabilityAggregationsForLogsApi service constructor.
    * @property {module:api/ObservabilityAggregationsForLogsApi}
    */
    ObservabilityAggregationsForLogsApi,

    /**
    * The ObservabilityCustomDashboardsApi service constructor.
    * @property {module:api/ObservabilityCustomDashboardsApi}
    */
    ObservabilityCustomDashboardsApi,

    /**
    * The ObservabilityTimeseriesApi service constructor.
    * @property {module:api/ObservabilityTimeseriesApi}
    */
    ObservabilityTimeseriesApi,

    /**
    * The OriginInspectorHistoricalApi service constructor.
    * @property {module:api/OriginInspectorHistoricalApi}
    */
    OriginInspectorHistoricalApi,

    /**
    * The OriginInspectorRealtimeApi service constructor.
    * @property {module:api/OriginInspectorRealtimeApi}
    */
    OriginInspectorRealtimeApi,

    /**
    * The PackageApi service constructor.
    * @property {module:api/PackageApi}
    */
    PackageApi,

    /**
    * The PoolApi service constructor.
    * @property {module:api/PoolApi}
    */
    PoolApi,

    /**
    * The PopApi service constructor.
    * @property {module:api/PopApi}
    */
    PopApi,

    /**
    * The ProductAiAcceleratorApi service constructor.
    * @property {module:api/ProductAiAcceleratorApi}
    */
    ProductAiAcceleratorApi,

    /**
    * The ProductApiDiscoveryApi service constructor.
    * @property {module:api/ProductApiDiscoveryApi}
    */
    ProductApiDiscoveryApi,

    /**
    * The ProductBotManagementApi service constructor.
    * @property {module:api/ProductBotManagementApi}
    */
    ProductBotManagementApi,

    /**
    * The ProductBrotliCompressionApi service constructor.
    * @property {module:api/ProductBrotliCompressionApi}
    */
    ProductBrotliCompressionApi,

    /**
    * The ProductDdosProtectionApi service constructor.
    * @property {module:api/ProductDdosProtectionApi}
    */
    ProductDdosProtectionApi,

    /**
    * The ProductDomainInspectorApi service constructor.
    * @property {module:api/ProductDomainInspectorApi}
    */
    ProductDomainInspectorApi,

    /**
    * The ProductDomainResearchApi service constructor.
    * @property {module:api/ProductDomainResearchApi}
    */
    ProductDomainResearchApi,

    /**
    * The ProductFanoutApi service constructor.
    * @property {module:api/ProductFanoutApi}
    */
    ProductFanoutApi,

    /**
    * The ProductImageOptimizerApi service constructor.
    * @property {module:api/ProductImageOptimizerApi}
    */
    ProductImageOptimizerApi,

    /**
    * The ProductLogExplorerInsightsApi service constructor.
    * @property {module:api/ProductLogExplorerInsightsApi}
    */
    ProductLogExplorerInsightsApi,

    /**
    * The ProductNgwafApi service constructor.
    * @property {module:api/ProductNgwafApi}
    */
    ProductNgwafApi,

    /**
    * The ProductObjectStorageApi service constructor.
    * @property {module:api/ProductObjectStorageApi}
    */
    ProductObjectStorageApi,

    /**
    * The ProductOriginInspectorApi service constructor.
    * @property {module:api/ProductOriginInspectorApi}
    */
    ProductOriginInspectorApi,

    /**
    * The ProductWebsocketsApi service constructor.
    * @property {module:api/ProductWebsocketsApi}
    */
    ProductWebsocketsApi,

    /**
    * The PublicIpListApi service constructor.
    * @property {module:api/PublicIpListApi}
    */
    PublicIpListApi,

    /**
    * The PublishApi service constructor.
    * @property {module:api/PublishApi}
    */
    PublishApi,

    /**
    * The PurgeApi service constructor.
    * @property {module:api/PurgeApi}
    */
    PurgeApi,

    /**
    * The RateLimiterApi service constructor.
    * @property {module:api/RateLimiterApi}
    */
    RateLimiterApi,

    /**
    * The RealtimeApi service constructor.
    * @property {module:api/RealtimeApi}
    */
    RealtimeApi,

    /**
    * The RequestSettingsApi service constructor.
    * @property {module:api/RequestSettingsApi}
    */
    RequestSettingsApi,

    /**
    * The ResourceApi service constructor.
    * @property {module:api/ResourceApi}
    */
    ResourceApi,

    /**
    * The ResponseObjectApi service constructor.
    * @property {module:api/ResponseObjectApi}
    */
    ResponseObjectApi,

    /**
    * The SecretStoreApi service constructor.
    * @property {module:api/SecretStoreApi}
    */
    SecretStoreApi,

    /**
    * The SecretStoreItemApi service constructor.
    * @property {module:api/SecretStoreItemApi}
    */
    SecretStoreItemApi,

    /**
    * The ServerApi service constructor.
    * @property {module:api/ServerApi}
    */
    ServerApi,

    /**
    * The ServiceApi service constructor.
    * @property {module:api/ServiceApi}
    */
    ServiceApi,

    /**
    * The ServiceAuthorizationsApi service constructor.
    * @property {module:api/ServiceAuthorizationsApi}
    */
    ServiceAuthorizationsApi,

    /**
    * The SettingsApi service constructor.
    * @property {module:api/SettingsApi}
    */
    SettingsApi,

    /**
    * The SnippetApi service constructor.
    * @property {module:api/SnippetApi}
    */
    SnippetApi,

    /**
    * The StarApi service constructor.
    * @property {module:api/StarApi}
    */
    StarApi,

    /**
    * The StatsApi service constructor.
    * @property {module:api/StatsApi}
    */
    StatsApi,

    /**
    * The SudoApi service constructor.
    * @property {module:api/SudoApi}
    */
    SudoApi,

    /**
    * The TlsActivationsApi service constructor.
    * @property {module:api/TlsActivationsApi}
    */
    TlsActivationsApi,

    /**
    * The TlsBulkCertificatesApi service constructor.
    * @property {module:api/TlsBulkCertificatesApi}
    */
    TlsBulkCertificatesApi,

    /**
    * The TlsCertificatesApi service constructor.
    * @property {module:api/TlsCertificatesApi}
    */
    TlsCertificatesApi,

    /**
    * The TlsConfigurationsApi service constructor.
    * @property {module:api/TlsConfigurationsApi}
    */
    TlsConfigurationsApi,

    /**
    * The TlsCsrsApi service constructor.
    * @property {module:api/TlsCsrsApi}
    */
    TlsCsrsApi,

    /**
    * The TlsDomainsApi service constructor.
    * @property {module:api/TlsDomainsApi}
    */
    TlsDomainsApi,

    /**
    * The TlsPrivateKeysApi service constructor.
    * @property {module:api/TlsPrivateKeysApi}
    */
    TlsPrivateKeysApi,

    /**
    * The TlsSubscriptionsApi service constructor.
    * @property {module:api/TlsSubscriptionsApi}
    */
    TlsSubscriptionsApi,

    /**
    * The TokensApi service constructor.
    * @property {module:api/TokensApi}
    */
    TokensApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi,

    /**
    * The VclApi service constructor.
    * @property {module:api/VclApi}
    */
    VclApi,

    /**
    * The VclDiffApi service constructor.
    * @property {module:api/VclDiffApi}
    */
    VclDiffApi,

    /**
    * The VersionApi service constructor.
    * @property {module:api/VersionApi}
    */
    VersionApi,

    /**
    * The WholePlatformDdosHistoricalApi service constructor.
    * @property {module:api/WholePlatformDdosHistoricalApi}
    */
    WholePlatformDdosHistoricalApi,

    authenticate
};

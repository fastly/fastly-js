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

import ApiClient from '../ApiClient';
import BackendResponse from './BackendResponse';
import CacheSettingResponse from './CacheSettingResponse';
import ConditionResponse from './ConditionResponse';
import Director from './Director';
import DomainResponse from './DomainResponse';
import GzipResponse from './GzipResponse';
import HeaderResponse from './HeaderResponse';
import HealthcheckResponse from './HealthcheckResponse';
import RequestSettingsResponse from './RequestSettingsResponse';
import ResponseObjectResponse from './ResponseObjectResponse';
import SchemasSnippetResponse from './SchemasSnippetResponse';
import SchemasVclResponse from './SchemasVclResponse';
import VersionDetailSettings from './VersionDetailSettings';

/**
 * The VersionDetail model module.
 * @module model/VersionDetail
 * @version 7.6.0
 */
class VersionDetail {
    /**
     * Constructs a new <code>VersionDetail</code>.
     * @alias module:model/VersionDetail
     */
    constructor() { 
        
        VersionDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VersionDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionDetail} obj Optional instance to populate.
     * @return {module:model/VersionDetail} The populated <code>VersionDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VersionDetail();

            if (data.hasOwnProperty('backends')) {
                obj['backends'] = ApiClient.convertToType(data['backends'], [BackendResponse]);
            }
            if (data.hasOwnProperty('cache_settings')) {
                obj['cache_settings'] = ApiClient.convertToType(data['cache_settings'], [CacheSettingResponse]);
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [ConditionResponse]);
            }
            if (data.hasOwnProperty('directors')) {
                obj['directors'] = ApiClient.convertToType(data['directors'], [Director]);
            }
            if (data.hasOwnProperty('domains')) {
                obj['domains'] = ApiClient.convertToType(data['domains'], [DomainResponse]);
            }
            if (data.hasOwnProperty('gzips')) {
                obj['gzips'] = ApiClient.convertToType(data['gzips'], [GzipResponse]);
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], [HeaderResponse]);
            }
            if (data.hasOwnProperty('healthchecks')) {
                obj['healthchecks'] = ApiClient.convertToType(data['healthchecks'], [HealthcheckResponse]);
            }
            if (data.hasOwnProperty('request_settings')) {
                obj['request_settings'] = ApiClient.convertToType(data['request_settings'], [RequestSettingsResponse]);
            }
            if (data.hasOwnProperty('response_objects')) {
                obj['response_objects'] = ApiClient.convertToType(data['response_objects'], [ResponseObjectResponse]);
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = VersionDetailSettings.constructFromObject(data['settings']);
            }
            if (data.hasOwnProperty('snippets')) {
                obj['snippets'] = ApiClient.convertToType(data['snippets'], [SchemasSnippetResponse]);
            }
            if (data.hasOwnProperty('vcls')) {
                obj['vcls'] = ApiClient.convertToType(data['vcls'], [SchemasVclResponse]);
            }
            if (data.hasOwnProperty('wordpress')) {
                obj['wordpress'] = ApiClient.convertToType(data['wordpress'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * List of backends associated to this service.
 * @member {Array.<module:model/BackendResponse>} backends
 */
VersionDetail.prototype['backends'] = undefined;

/**
 * List of cache settings associated to this service.
 * @member {Array.<module:model/CacheSettingResponse>} cache_settings
 */
VersionDetail.prototype['cache_settings'] = undefined;

/**
 * List of conditions associated to this service.
 * @member {Array.<module:model/ConditionResponse>} conditions
 */
VersionDetail.prototype['conditions'] = undefined;

/**
 * List of directors associated to this service.
 * @member {Array.<module:model/Director>} directors
 */
VersionDetail.prototype['directors'] = undefined;

/**
 * List of domains associated to this service.
 * @member {Array.<module:model/DomainResponse>} domains
 */
VersionDetail.prototype['domains'] = undefined;

/**
 * List of gzip rules associated to this service.
 * @member {Array.<module:model/GzipResponse>} gzips
 */
VersionDetail.prototype['gzips'] = undefined;

/**
 * List of headers associated to this service.
 * @member {Array.<module:model/HeaderResponse>} headers
 */
VersionDetail.prototype['headers'] = undefined;

/**
 * List of healthchecks associated to this service.
 * @member {Array.<module:model/HealthcheckResponse>} healthchecks
 */
VersionDetail.prototype['healthchecks'] = undefined;

/**
 * List of request settings for this service.
 * @member {Array.<module:model/RequestSettingsResponse>} request_settings
 */
VersionDetail.prototype['request_settings'] = undefined;

/**
 * List of response objects for this service.
 * @member {Array.<module:model/ResponseObjectResponse>} response_objects
 */
VersionDetail.prototype['response_objects'] = undefined;

/**
 * @member {module:model/VersionDetailSettings} settings
 */
VersionDetail.prototype['settings'] = undefined;

/**
 * List of VCL snippets for this service.
 * @member {Array.<module:model/SchemasSnippetResponse>} snippets
 */
VersionDetail.prototype['snippets'] = undefined;

/**
 * List of VCL files for this service.
 * @member {Array.<module:model/SchemasVclResponse>} vcls
 */
VersionDetail.prototype['vcls'] = undefined;

/**
 * A list of Wordpress rules with this service.
 * @member {Array.<Object>} wordpress
 */
VersionDetail.prototype['wordpress'] = undefined;






export default VersionDetail;


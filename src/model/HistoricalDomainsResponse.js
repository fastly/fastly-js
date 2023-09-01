/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DomainInspectorEntry from './DomainInspectorEntry';
import HistoricalDomains from './HistoricalDomains';
import HistoricalDomainsMeta from './HistoricalDomainsMeta';
import HistoricalDomainsResponseAllOf from './HistoricalDomainsResponseAllOf';

/**
 * The HistoricalDomainsResponse model module.
 * @module model/HistoricalDomainsResponse
 * @version 6.1.1
 */
class HistoricalDomainsResponse {
    /**
     * Constructs a new <code>HistoricalDomainsResponse</code>.
     * @alias module:model/HistoricalDomainsResponse
     * @implements module:model/HistoricalDomains
     * @implements module:model/HistoricalDomainsResponseAllOf
     */
    constructor() { 
        HistoricalDomains.initialize(this);HistoricalDomainsResponseAllOf.initialize(this);
        HistoricalDomainsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalDomainsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalDomainsResponse} obj Optional instance to populate.
     * @return {module:model/HistoricalDomainsResponse} The populated <code>HistoricalDomainsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalDomainsResponse();
            HistoricalDomains.constructFromObject(data, obj);
            HistoricalDomainsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = HistoricalDomainsMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [DomainInspectorEntry]);
            }
        }
        return obj;
    }


}

/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */
HistoricalDomainsResponse.prototype['status'] = undefined;

/**
 * @member {module:model/HistoricalDomainsMeta} meta
 */
HistoricalDomainsResponse.prototype['meta'] = undefined;

/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */
HistoricalDomainsResponse.prototype['msg'] = undefined;

/**
 * A list of timeseries. Each individual timeseries represents a unique combination of dimensions, such as domain, region or POP.
 * @member {Array.<module:model/DomainInspectorEntry>} data
 */
HistoricalDomainsResponse.prototype['data'] = undefined;


// Implement HistoricalDomains interface:
/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */
HistoricalDomains.prototype['status'] = undefined;
/**
 * @member {module:model/HistoricalDomainsMeta} meta
 */
HistoricalDomains.prototype['meta'] = undefined;
/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */
HistoricalDomains.prototype['msg'] = undefined;
/**
 * A list of [entries](#entry-data-model), each representing one unique combination of dimensions, such as domain, region, or POP.
 * @member {Array.<module:model/HistoricalDomainsData>} data
 */
HistoricalDomains.prototype['data'] = undefined;
// Implement HistoricalDomainsResponseAllOf interface:
/**
 * A list of timeseries. Each individual timeseries represents a unique combination of dimensions, such as domain, region or POP.
 * @member {Array.<module:model/DomainInspectorEntry>} data
 */
HistoricalDomainsResponseAllOf.prototype['data'] = undefined;




export default HistoricalDomainsResponse;


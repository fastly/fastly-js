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
import DomainInspectorMeasurements from './DomainInspectorMeasurements';
import RecordedTimestamp from './RecordedTimestamp';

/**
 * The DomainInspectorRealtimeEntry model module.
 * @module model/DomainInspectorRealtimeEntry
 * @version 7.6.0
 */
class DomainInspectorRealtimeEntry {
    /**
     * Constructs a new <code>DomainInspectorRealtimeEntry</code>.
     * Each reporting period is represented by an entry in the &#x60;Data&#x60; property of the top level response and provides access to [measurement data](#measurements-data-model) for that time period, grouped in various ways: by domain name, domain IP address, and optionally by POP. The &#x60;datacenter&#x60; property organizes the measurements by Fastly POP, while the &#x60;aggregated&#x60; property combines the measurements of all POPs (but still splits by backend name and IP). 
     * @alias module:model/DomainInspectorRealtimeEntry
     */
    constructor() { 
        
        DomainInspectorRealtimeEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DomainInspectorRealtimeEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainInspectorRealtimeEntry} obj Optional instance to populate.
     * @return {module:model/DomainInspectorRealtimeEntry} The populated <code>DomainInspectorRealtimeEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DomainInspectorRealtimeEntry();

            if (data.hasOwnProperty('recorded')) {
                obj['recorded'] = RecordedTimestamp.constructFromObject(data['recorded']);
            }
            if (data.hasOwnProperty('aggregated')) {
                obj['aggregated'] = ApiClient.convertToType(data['aggregated'], {'String': DomainInspectorMeasurements});
            }
            if (data.hasOwnProperty('datacenter')) {
                obj['datacenter'] = ApiClient.convertToType(data['datacenter'], {'String': {'String': DomainInspectorMeasurements}});
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RecordedTimestamp} recorded
 */
DomainInspectorRealtimeEntry.prototype['recorded'] = undefined;

/**
 * Groups [measurements](#measurements-data-model) by backend name and then by IP address.
 * @member {Object.<String, module:model/DomainInspectorMeasurements>} aggregated
 */
DomainInspectorRealtimeEntry.prototype['aggregated'] = undefined;

/**
 * Groups [measurements](#measurements-data-model) by POP, then backend name, and then IP address. See the [POPs API](https://www.fastly.com/documentation/reference/api/utils/pops/) for details about POP identifiers.
 * @member {Object.<String, Object.<String, module:model/DomainInspectorMeasurements>>} datacenter
 */
DomainInspectorRealtimeEntry.prototype['datacenter'] = undefined;






export default DomainInspectorRealtimeEntry;


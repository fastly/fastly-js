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
import OriginInspectorMeasurements from './OriginInspectorMeasurements';
import OriginInspectorRealtimeEntryRecorded from './OriginInspectorRealtimeEntryRecorded';

/**
 * The OriginInspectorRealtimeEntry model module.
 * @module model/OriginInspectorRealtimeEntry
 * @version 7.5.0
 */
class OriginInspectorRealtimeEntry {
    /**
     * Constructs a new <code>OriginInspectorRealtimeEntry</code>.
     * Each reporting period is represented by an entry in the &#x60;Data&#x60; property of the top level response and provides access to [measurement data](#measurements-data-model) for that time period, grouped by origin name and optionally by POP. The &#x60;datacenter&#x60; property organizes the measurements by Fastly POP, while the &#x60;aggregated&#x60; property combines the measurements of all POPs. 
     * @alias module:model/OriginInspectorRealtimeEntry
     */
    constructor() { 
        
        OriginInspectorRealtimeEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OriginInspectorRealtimeEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OriginInspectorRealtimeEntry} obj Optional instance to populate.
     * @return {module:model/OriginInspectorRealtimeEntry} The populated <code>OriginInspectorRealtimeEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OriginInspectorRealtimeEntry();

            if (data.hasOwnProperty('recorded')) {
                obj['recorded'] = OriginInspectorRealtimeEntryRecorded.constructFromObject(data['recorded']);
            }
            if (data.hasOwnProperty('aggregated')) {
                obj['aggregated'] = ApiClient.convertToType(data['aggregated'], {'String': OriginInspectorMeasurements});
            }
            if (data.hasOwnProperty('datacenter')) {
                obj['datacenter'] = ApiClient.convertToType(data['datacenter'], {'String': {'String': OriginInspectorMeasurements}});
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OriginInspectorRealtimeEntryRecorded} recorded
 */
OriginInspectorRealtimeEntry.prototype['recorded'] = undefined;

/**
 * Groups [measurements](#measurements-data-model) by backend name.
 * @member {Object.<String, module:model/OriginInspectorMeasurements>} aggregated
 */
OriginInspectorRealtimeEntry.prototype['aggregated'] = undefined;

/**
 * Groups [measurements](#measurements-data-model) by POP, then backend name. See the [POPs API](https://www.fastly.com/documentation/reference/api/utils/pops/) for details about POP identifiers.
 * @member {Object.<String, Object.<String, module:model/OriginInspectorMeasurements>>} datacenter
 */
OriginInspectorRealtimeEntry.prototype['datacenter'] = undefined;






export default OriginInspectorRealtimeEntry;


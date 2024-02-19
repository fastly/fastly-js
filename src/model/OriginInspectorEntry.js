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
import OriginInspectorDimensions from './OriginInspectorDimensions';
import OriginInspectorValues from './OriginInspectorValues';

/**
 * The OriginInspectorEntry model module.
 * @module model/OriginInspectorEntry
 * @version 7.0.1
 */
class OriginInspectorEntry {
    /**
     * Constructs a new <code>OriginInspectorEntry</code>.
     * @alias module:model/OriginInspectorEntry
     */
    constructor() { 
        
        OriginInspectorEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OriginInspectorEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OriginInspectorEntry} obj Optional instance to populate.
     * @return {module:model/OriginInspectorEntry} The populated <code>OriginInspectorEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OriginInspectorEntry();

            if (data.hasOwnProperty('dimensions')) {
                obj['dimensions'] = OriginInspectorDimensions.constructFromObject(data['dimensions']);
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [OriginInspectorValues]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OriginInspectorDimensions} dimensions
 */
OriginInspectorEntry.prototype['dimensions'] = undefined;

/**
 * An array of values representing the metric values at each point in time. Note that this dataset is sparse: only the keys with non-zero values will be included in the record. 
 * @member {Array.<module:model/OriginInspectorValues>} values
 */
OriginInspectorEntry.prototype['values'] = undefined;






export default OriginInspectorEntry;


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
import DomainInspectorRealtimeEntry from './DomainInspectorRealtimeEntry';
import SubsequentRequestTimestamp from './SubsequentRequestTimestamp';

/**
 * The DomainInspector model module.
 * @module model/DomainInspector
 * @version 6.2.1
 */
class DomainInspector {
    /**
     * Constructs a new <code>DomainInspector</code>.
     * @alias module:model/DomainInspector
     */
    constructor() { 
        
        DomainInspector.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DomainInspector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainInspector} obj Optional instance to populate.
     * @return {module:model/DomainInspector} The populated <code>DomainInspector</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DomainInspector();

            if (data.hasOwnProperty('Timestamp')) {
                obj['Timestamp'] = SubsequentRequestTimestamp.constructFromObject(data['Timestamp']);
            }
            if (data.hasOwnProperty('AggregateDelay')) {
                obj['AggregateDelay'] = ApiClient.convertToType(data['AggregateDelay'], 'Number');
            }
            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], [DomainInspectorRealtimeEntry]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SubsequentRequestTimestamp} Timestamp
 */
DomainInspector.prototype['Timestamp'] = undefined;

/**
 * Offset of entry timestamps from the current time due to processing time.
 * @member {Number} AggregateDelay
 */
DomainInspector.prototype['AggregateDelay'] = undefined;

/**
 * A list of report [entries](#entry-data-model), each representing one second of time.
 * @member {Array.<module:model/DomainInspectorRealtimeEntry>} Data
 */
DomainInspector.prototype['Data'] = undefined;






export default DomainInspector;


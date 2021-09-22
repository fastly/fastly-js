"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Backend = _interopRequireDefault(require("./Backend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SchemasDirector model module.
 * @module model/SchemasDirector
 * @version 3.0.0-alpha1
 */
var SchemasDirector = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SchemasDirector</code>.
   * @alias module:model/SchemasDirector
   */
  function SchemasDirector() {
    _classCallCheck(this, SchemasDirector);

    SchemasDirector.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SchemasDirector, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SchemasDirector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasDirector} obj Optional instance to populate.
     * @return {module:model/SchemasDirector} The populated <code>SchemasDirector</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SchemasDirector();

        if (data.hasOwnProperty('backends')) {
          obj['backends'] = _ApiClient["default"].convertToType(data['backends'], [_Backend["default"]]);
        }

        if (data.hasOwnProperty('capacity')) {
          obj['capacity'] = _ApiClient["default"].convertToType(data['capacity'], 'Number');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('quorum')) {
          obj['quorum'] = _ApiClient["default"].convertToType(data['quorum'], 'Number');
        }

        if (data.hasOwnProperty('retries')) {
          obj['retries'] = _ApiClient["default"].convertToType(data['retries'], 'Number');
        }

        if (data.hasOwnProperty('shield')) {
          obj['shield'] = _ApiClient["default"].convertToType(data['shield'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SchemasDirector;
}();
/**
 * List of backends associated to a director.
 * @member {Array.<module:model/Backend>} backends
 */


SchemasDirector.prototype['backends'] = undefined;
/**
 * Unused.
 * @member {Number} capacity
 */

SchemasDirector.prototype['capacity'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

SchemasDirector.prototype['comment'] = undefined;
/**
 * Name for the Director.
 * @member {String} name
 */

SchemasDirector.prototype['name'] = undefined;
/**
 * The percentage of capacity that needs to be up for a director to be considered up. `0` to `100`.
 * @member {Number} quorum
 * @default 75
 */

SchemasDirector.prototype['quorum'] = 75;
/**
 * How many backends to search if it fails.
 * @member {Number} retries
 * @default 5
 */

SchemasDirector.prototype['retries'] = 5;
/**
 * Selected POP to serve as a shield for the backends. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
 * @member {String} shield
 * @default 'null'
 */

SchemasDirector.prototype['shield'] = 'null';
/**
 * What type of load balance group to use.
 * @member {module:model/SchemasDirector.TypeEnum} type
 * @default TypeEnum.random
 */

SchemasDirector.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {Number}
 * @readonly
 */

SchemasDirector['TypeEnum'] = {
  /**
   * value: 1
   * @const
   */
  "random": 1,

  /**
   * value: 3
   * @const
   */
  "hash": 3,

  /**
   * value: 4
   * @const
   */
  "client": 4
};
var _default = SchemasDirector;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PurgeKeys model module.
 * @module model/PurgeKeys
 * @version 3.0.0-alpha1
 */
var PurgeKeys = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PurgeKeys</code>.
   * Purge multiple surrogate key tags using a JSON POST body. Not required if the &#x60;Surrogate-Key&#x60; header is specified.
   * @alias module:model/PurgeKeys
   */
  function PurgeKeys() {
    _classCallCheck(this, PurgeKeys);

    PurgeKeys.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PurgeKeys, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PurgeKeys</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PurgeKeys} obj Optional instance to populate.
     * @return {module:model/PurgeKeys} The populated <code>PurgeKeys</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PurgeKeys();

        if (data.hasOwnProperty('surrogate_keys')) {
          obj['surrogate_keys'] = _ApiClient["default"].convertToType(data['surrogate_keys'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return PurgeKeys;
}();
/**
 * @member {Array.<String>} surrogate_keys
 */


PurgeKeys.prototype['surrogate_keys'] = undefined;
var _default = PurgeKeys;
exports["default"] = _default;
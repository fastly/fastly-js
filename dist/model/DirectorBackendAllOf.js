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
 * The DirectorBackendAllOf model module.
 * @module model/DirectorBackendAllOf
 * @version 3.0.0-alpha1
 */
var DirectorBackendAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DirectorBackendAllOf</code>.
   * @alias module:model/DirectorBackendAllOf
   */
  function DirectorBackendAllOf() {
    _classCallCheck(this, DirectorBackendAllOf);

    DirectorBackendAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DirectorBackendAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DirectorBackendAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DirectorBackendAllOf} obj Optional instance to populate.
     * @return {module:model/DirectorBackendAllOf} The populated <code>DirectorBackendAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DirectorBackendAllOf();

        if (data.hasOwnProperty('backend_name')) {
          obj['backend_name'] = _ApiClient["default"].convertToType(data['backend_name'], 'String');
        }

        if (data.hasOwnProperty('director')) {
          obj['director'] = _ApiClient["default"].convertToType(data['director'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DirectorBackendAllOf;
}();
/**
 * The name of the backend.
 * @member {String} backend_name
 */


DirectorBackendAllOf.prototype['backend_name'] = undefined;
/**
 * Name for the Director.
 * @member {String} director
 */

DirectorBackendAllOf.prototype['director'] = undefined;
var _default = DirectorBackendAllOf;
exports["default"] = _default;